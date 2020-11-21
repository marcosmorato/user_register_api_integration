import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import FeedbackList from "../../components/feedbackList";

const Feedback = () => {
  const { userId } = useParams();
  const [feedbackList, setFeedbackList] = useState([]);
  const token = window.localStorage.getItem("authToken");
  const history = useHistory();

  const newFeedback = () => {
    history.push(`/users/${userId}/feedbacks/new`);
  };

  useEffect(() => {
    axios
      .get(`https://ka-users-api.herokuapp.com/users/${userId}/feedbacks`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setFeedbackList(res.data.sort((a, b) => a.id - b.id));
      });
  }, []);

  return (
    <>
      {feedbackList.length === 0 ? (
        <div>No data</div>
      ) : (
        <FeedbackList list={feedbackList} />
      )}

      <button onClick={newFeedback}>New feedback</button>
    </>
  );
};

export default Feedback;

// ter um map que passe por todos os usuarios
// ter um find que localzia o id clicado
//
