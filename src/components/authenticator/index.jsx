import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Login from "../../pages/login";
import Register from "../../pages/register";
import MembersArea from "../../pages/users";
import axios from "axios";

const Authenticator = () => {
  const [isAuth, setAuth] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      return setAuth(false);
    }

    axios
      .get("http://ka-users-api.herokuapp.com/users", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setAuth(true);
        history.push("/users");
      })
      .catch(() => {
        setAuth(false);
      });
  }, [history, setAuth]);

  if (isAuth === undefined) {
    return <div>Loading...</div>;
  }
  if (isAuth === false) {
    return (
      <>
        <ul>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login setAuth={setAuth} />
          </Route>
        </Switch>
      </>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Login setAuth={setAuth}></Login>
      </Route>
      <Route path="/users">
        <MembersArea />
      </Route>
    </Switch>
  );
};

export default Authenticator;
