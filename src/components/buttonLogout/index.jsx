import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return <a onClick={logout}>Logout</a>;
};

export default Logout;
