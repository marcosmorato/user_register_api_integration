import { useState, useEffect } from "react";
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
    if (startPosition > 0) {
      setEndPosition(16);
      setStartPosition(0);
    }
  };

  const goToEnd = () => {
    if (endPosition < users.length) {
      setEndPosition(users.length);
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
    setCurrentPage(users[e]);
    setPosition(e);

    console.log(endPosition - startPosition);

    if (
      endPosition - e < 8 &&
      position < users.length - 1 &&
      endPosition - startPosition === 16
    ) {
      setEndPosition(endPosition + 1);
      setStartPosition(startPosition + 1);
    } else if (
      startPosition > 0 &&
      position < users.length - 1 &&
      endPosition - startPosition === 16
    ) {
      setEndPosition(endPosition - 1);
      setStartPosition(startPosition - 1);
    }
  };

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
        for (let i = 0; i <= totalPages; i++) {
          numOfPages.push(i);
        }
        startPag();
        setPages(numOfPages);
      });
  }, [total]);

  useEffect(() => {
    setCurrentPage(users[position]);
  }, [position]);

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
