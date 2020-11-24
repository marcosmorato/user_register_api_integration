import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import FeedbackList from "../../components/feedbackList";
import {
  Container,
  Table,
  Pagination,
  PaginationItem,
  PaginationButton,
} from "../../components/user/styled";

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

  const goToEnd = () => {
    console.log(endPosition);
    if (endPosition < users.length - 1) {
      setEndPosition(users.length - 1);
      setStartPosition(users.length - 16);
      setCurrentPage(users[users.length - 1]);
      console.log(endPosition);
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
      {feedbackList.length === 0 ? (
        <div>No data</div>
      ) : (
        <FeedbackList list={currentPage} total={total} />
      )}

      <Pagination>
        <div>Qtd {total}</div>
        <PaginationButton>
          <PaginationItem onClick={setPrevPag}>Previous</PaginationItem>

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
        </PaginationButton>
      </Pagination>

      <button onClick={newFeedback}>New feedback</button>
    </>
  );
};

export default Feedback;
