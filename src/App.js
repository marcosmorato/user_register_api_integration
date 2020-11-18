import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  const [localStorage, setLocalStorage] = useState(false);
  const [registerStorage, setRegisterStorage] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
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
            <Register
              registerStorage={registerStorage}
              setRegister={setRegisterStorage}
            />
          </Route>

          <Route path="/">
            <Login login={localStorage} setLocalStorage={setLocalStorage} />
          </Route>
        </Switch>
      </header>
    </div>
  );
};

export default App;
