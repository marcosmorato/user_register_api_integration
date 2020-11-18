import { Link } from "react-router-dom";

const Login = ({ login, setLogin }) => {
  return (
    <div>
      teste2
      <button
        onClick={() => {
          setLogin(true);
        }}
      >
        login
      </button>
    </div>
  );
};

export default Login;
