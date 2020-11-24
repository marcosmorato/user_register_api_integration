import { useHistory } from "react-router-dom";
import { Button } from "./styled";

const Logout = () => {
  const history = useHistory();
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return <Button onClick={logout}>Logout</Button>;
};

export default Logout;
