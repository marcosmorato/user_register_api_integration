import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import FeedbackList from "../../components/feedbackList";
import { ButtonNew } from "../../components/StyledComponents/Button/styled";
import {
  Table,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
  PaginationItem,
  PaginationButton,
} from "../../components/StyledComponents/Table/styled";

const Feedback = () => {
  const { userId } = useParams();
  const [feedbackList, setFeedbackList] = useState([]);
  const token = window.localStorage.getItem("authToken");
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [position, setPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(16);
  const [startPosition, setStartPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState([]);
  const newFeedback = () => {
    history.push(`/users/${userId}/feedbacks/new`);
  };
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

  const users = createPage(feedbackList, 10);

  const startPag = () => {
    setCurrentPage(users[0]);
  };

  const setPrevPag = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else if (position > 15) {
      setEndPosition(endPosition - 1);
      setStartPosition(startPosition - 1);
    }
  };

  const setNextPag = () => {
    if (position < users.length - 1) {
      setPosition(position + 1);
    } else if (position > 15) {
      setEndPosition(endPosition + 1);
      setStartPosition(startPosition + 1);
    }
  };

  const goToPag = (e) => {
    setCurrentPage(users[e]);
    setPosition(e);
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
      .get(`https://ka-users-api.herokuapp.com/users/${userId}/feedbacks`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setFeedbackList(res.data.sort((a, b) => a.id - b.id));
        setTotal(res.data.length);
        const totalPages = Math.floor(total / 10);
        const numOfPages = [];
        for (let i = 0; i < totalPages; i++) {
          numOfPages.push(i);
        }
        startPag(0);
        setPages(numOfPages);
      });
  }, [total]);

  useEffect(() => {
    setCurrentPage(users[position]);
  }, [position]);
  return (
    <>
      <ButtonNew onClick={newFeedback}>New feedback</ButtonNew>
      <Table>
        {feedbackList.length === 0 ? (
          <>
            <thead>
              <TableRow>
                <th>Data</th>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>No data</TableCell>
              </TableRow>
            </tbody>
          </>
        ) : (
          <>
            <thead>
              <TableRow>
                <th>ID</th>
                <th>NAME</th>
                <th>USER</th>
                <th>CREATOR'S NAME</th>
                <th>CREATOR'S USER</th>
                <th>GRADE</th>
              </TableRow>
            </thead>
            <tbody>
              <FeedbackList list={currentPage} total={total} />
            </tbody>
          </>
        )}
      </Table>
      <TableFooter>
        <Pagination>
          <div>Quantidade de Feedbacks: {total}</div>
          <PaginationButton>
            {total > 9 && (
              <PaginationItem onClick={setPrevPag}>Previous</PaginationItem>
            )}

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

            {total > 9 && (
              <PaginationItem onClick={setNextPag}>Next</PaginationItem>
            )}
          </PaginationButton>
        </Pagination>
      </TableFooter>
    </>
  );
};

export default Feedback;
