import { useHistory, useParams } from "react-router-dom";

const NewFeedbacks = () => {
  const { userId } = useParams();

  const history = useHistory();

  const getFeedback = () => {
    history.push(`/users/${userId}/feedbacks`);
  };

  return (
    <>
      <div>New Feedback</div>
      <button onClick={getFeedback}>enviar</button>
    </>
  );
};

export default NewFeedbacks;
