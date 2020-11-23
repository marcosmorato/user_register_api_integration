import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Login from "../../pages/login";
import Register from "../../pages/register";
import MembersArea from "../../pages/users";
import axios from "axios";
import { Container, Navigation } from "./styled";

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
      <Container>
        <Navigation>
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/register"
            >
              Cadastro
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Login
            </Link>
          </div>
        </Navigation>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login setAuth={setAuth} />
          </Route>
        </Switch>
      </Container>
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
