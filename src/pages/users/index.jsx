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
  const [pages, setPages] = useState([]);
  const [position, setPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(16);
  const [startPosition, setStartPosition] = useState(0);

  const [currentPage, setCurrentPage] = useState([]);

  const token = window.localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`https://ka-users-api.herokuapp.com/users`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setUserList(res.data.sort((a, b) => a.id - b.id));
        setTotal(res.data.length);
        const totalPages = Math.floor(total / 10);
        const numOfPages = [];
        for (let i = 1; i <= totalPages; i++) {
          numOfPages.push(i);
        }
        startPag();
        setPages(numOfPages);
      });
  }, [total]);

  useEffect(() => {
    setCurrentPage(users[position]);
  }, [position]);
  const createPage = (base, max) => {
    const res = [[]];
    let grupo = 0;

    for (let i = 0; i < base.length; i++) {
      if (res[grupo] === undefined) {
        res[grupo] = [];
      }

      res[grupo].push(base[i]);

      if ((i + 1) % max === 0) {
        grupo = grupo + 1;
      }
    }

    return res;
  };

  const users = createPage(userList, 10);

  const startPag = () => {
    setCurrentPage(users[0]);
  };
  const goToStart = () => {
    if (position > 0) {
      setEndPosition(16);
      setStartPosition(0);
    }
  };

  const goToEnd = () => {
    if (position < users.length - 1) {
      setEndPosition(users.length - 1);
      setStartPosition(users.length - 16);
    }
  };

  const setPrevPag = () => {
    if (position > 0) {
      setPosition(position - 1);
      setEndPosition(endPosition - 1);
      setStartPosition(startPosition - 1);
    }
  };

  const setNextPag = () => {
    if (position < users.length - 1) {
      setPosition(position + 1);
      setEndPosition(endPosition + 1);
      setStartPosition(startPosition + 1);
    }
  };

  const goToPag = (e) => {
    setCurrentPage(users[e - 1]);
    setPosition(e - 1);
    if (endPosition - e < 8 && e <= users.length - 1) {
      setEndPosition(endPosition + 1);
      setStartPosition(startPosition + 1);
    } else if (startPosition > 0) {
      setEndPosition(endPosition - 1);
      setStartPosition(startPosition - 1);
    }
  };

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
            <Table>
              <UserList list={currentPage} total={total} />
            </Table>
            <Pagination>
              <div>Qtd {total}</div>
              <PaginationButton>
                <PaginationItem onClick={setPrevPag}>Previous</PaginationItem>

                <PaginationItem onClick={goToStart}>
                  Volte ao inicio
                </PaginationItem>

                {pages.map((page, idx, arr) => {
                  if (idx >= startPosition && idx < endPosition) {
                    return (
                      <PaginationItem
                        isSelect={page === currentPage}
                        key={idx}
                        onClick={() => goToPag(page)}
                      >
                        {page}
                      </PaginationItem>
                    );
                  }
                })}

                <PaginationItem onClick={setNextPag}>Next</PaginationItem>
                <PaginationItem onClick={goToEnd}>Go to the end</PaginationItem>
              </PaginationButton>
            </Pagination>
          </Container>
        </Route>
      </Switch>
    </>
  );
};

export default MembersArea;
