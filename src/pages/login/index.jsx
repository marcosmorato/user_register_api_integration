import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter: pelomenos 1 letra maiuscula, 1 letra minuscula, 1 caractere especial e 1 número"
      )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  //validar API aqui, testar se ja tem cadastro
  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://ka-users-api.herokuapp.com/authenticate", { ...data })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("authToken", res.data.auth_token);
        props.setAuth(true);
        history.push("/users");
      })
      .catch((err) =>
        setError("user", {
          message: err.response.data.error.user_authentication,
        })
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <span> Usuario: </span>
          <input
            placeholder="What's your username?"
            name="user"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.user?.message}</p>
        </div>

        <div>
          <span> Senha: </span>

          <input
            placeholder="put your password"
            name="password"
            type="password"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>
        <div>
          <button type="submit">Manda bala</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
