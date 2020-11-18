import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/register"></Route>
          <Route path="/"></Route>
        </Switch>
      </header>
    </div>
  );
};

export default App;
