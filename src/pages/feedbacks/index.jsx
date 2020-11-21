import axios from "axios";
import { useParams } from "react-router-dom";

const Feedback = () => {
  let { userId } = useParams();

  const getFeedback = () => {
    const token = window.localStorage.getItem("authToken");

    axios
      .get(`https://ka-users-api.herokuapp.com/users/${userId}/feedbacks`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => err.response.data.error);
  };

  return (
    <>
      <div>Feedbacks</div>
      <button onClick={getFeedback}>Get</button>
    </>
  );
};

export default Feedback;

// ter um map que passe por todos os usuarios
// ter um find que localzia o id clicado
//
