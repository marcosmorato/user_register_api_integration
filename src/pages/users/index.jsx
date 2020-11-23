import { useState, useEffect, useCallback } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import UserList from "../../components/userList";
import Feedback from "../feedbacks";
import NewFeedback from "../newFeedbacks";
import Logout from "../../components/buttonLogout";
import {
  Container,
  Table,
  Pagination,
  PaginationItem,
  PaginationButton,
} from "../../components/user/styled";

const MembersArea = () => {
  const [userList, setUserList] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  const [startPagination, setStartPagination] = useState(0);
  const [endPagination, setEndPagination] = useState(5);

  const token = window.localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(
        `https://ka-users-api.herokuapp.com/users?page=${currentPage}&limit=${limit}`,
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        setUserList(res.data.sort((a, b) => a.id - b.id));
        setTotal(res.data.length);
        const totalPages = Math.ceil(total / limit);
        const arrayPages = [];
        for (let i = 1; i <= totalPages; i++) {
          arrayPages.push(i);
        }
        const allUsers = res.data;

        usersPerPage(allUsers);
        setPages(arrayPages);
      });
  }, [total, startPagination, endPagination]);

  useEffect(() => {
    setStartPagination(0);
    setEndPagination(limit);
  }, [limit]);

  const usersPerPage = useCallback((e) => {
    const users = e.slice(startPagination, endPagination);
    setUsers(users);
  });

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setEndPagination(e.target.value);
  });

  const setPrevPagination = useCallback(() => {
    if (startPagination > 0) {
      setStartPagination(startPagination - limit);
      setEndPagination(endPagination - limit);
    }
  });

  const setNextPagination = useCallback(() => {
    setStartPagination(startPagination + limit);
    setEndPagination(endPagination + limit);
  });

  const goToPagination = useCallback((e) => {
    setCurrentPage(e);
    setStartPagination(0 + e * limit + limit);
    setEndPagination(limit + e * limit + limit);

    console.log(startPagination);
    console.log(endPagination);
  });

  return (
    <>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
      <Switch>
        <Route path="/users/:userId/feedbacks/new">
          <NewFeedback />
        </Route>
        <Route path="/users/:userId/feedbacks">
          <Feedback />
        </Route>
        <Route path="/users">
          <Container>
            <h1>Alunos</h1>
            <select onChange={limits}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <button onClick={setNextPagination}>teste</button>
            <Table>
              <UserList list={users} total={total} />
            </Table>
            <Pagination>
              <div>Qtd {total}</div>
              <PaginationButton>
                {currentPage > 1 && (
                  <PaginationItem onClick={setPrevPagination}>
                    Previous
                  </PaginationItem>
                )}

                {pages.map((page) => (
                  <PaginationItem
                    isSelect={page === currentPage}
                    key={page}
                    onClick={() => goToPagination(page)}
                  >
                    {page}
                  </PaginationItem>
                ))}
                {currentPage < pages.length && (
                  <PaginationItem onClick={setNextPagination}>
                    Next
                  </PaginationItem>
                )}
              </PaginationButton>
            </Pagination>
          </Container>
        </Route>
      </Switch>
    </>
  );
};

export default MembersArea;
