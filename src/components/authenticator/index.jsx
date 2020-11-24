import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import Login from "../../pages/login";
import Register from "../../pages/register";
import MembersArea from "../../pages/users";
import axios from "axios";
import { Container } from "../StyledComponents/Container/styled";
import { Navigation } from "../StyledComponents/Navigation/styled";

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
        <Navigation>
          <Link to="/register">Cadastro</Link>
          <Link to="/">Login</Link>
        </Navigation>
        <Switch>
          <Route path="/register">
            <Container>
              <Register />
            </Container>
          </Route>
          <Route path="/">
            <Container>
              <Login setAuth={setAuth} />
            </Container>
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
