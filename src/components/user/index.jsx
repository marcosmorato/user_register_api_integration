import { useHistory, useParams } from "react-router-dom";

const User = (props) => {
  const history = useHistory();

  const getFeedback = () => {
    history.push("/users/:userId/feedbacks");
  };

  const newFeedback = () => {
    history.push("/users/:userId/feedbacks/new");
  };

  return (
    <div>
      <span>{props.id}</span>
      <span>{props.name}</span>
      <span>{props.user}</span>
      <span>{props.email}</span>
      <span>
        <button onClick={getFeedback}>Go to feedback</button>
      </span>
      <span>
        <button onClick={newFeedback}>New feedback</button>
      </span>
    </div>
  );
};

export default User;
