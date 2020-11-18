// o componente guarda o estato de autenticação que será utilizado para determinar quais rotas o usuario tem acesso( autenticado, nao autenticado, carregando)

import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Cadastro</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/register">
            <Register
              register={registerStorage}
              setRegister={setRegisterStorage}
            ></Register>
          </Route>
          <Route path="/">
            <Login login={localStorage} setLogin={setLocalStorage}>
              {console.log(`login ${localStorage}`)}
              {console.log(`register ${registerStorage}`)}
            </Login>
          </Route>
        </Switch>
      </header>
    </div>
  );
};

export default App;
