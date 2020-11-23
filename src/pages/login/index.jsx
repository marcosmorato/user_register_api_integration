import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { StyledLog, Form, User, Pass } from "./styled";

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
  const handleForm = (data) => {
    axios
      .post("https://ka-users-api.herokuapp.com/authenticate", { ...data })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("authToken", res.data.auth_token);
        props.setAuth(true);
        history.push("/users");
      })
      .catch((err) =>
        setError("user_authentication", {
          message: err.response.data.error.user_authentication,
        })
      );
  };
  return (
    <StyledLog>
      <Form onSubmit={handleSubmit(handleForm)}>
        <h1>Login</h1>
        <User>
          <div></div>
          <input
            placeholder="What's your username?"
            name="user"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.user?.message}</p>
        </User>
        <Pass>
          <div></div>
          <input
            placeholder="put your password"
            name="password"
            type="password"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </Pass>
        <div>
          <p style={{ color: "red" }}>{errors.user_authentication?.message}</p>
          <button type="submit">Enter</button>
        </div>
      </Form>
    </StyledLog>
  );
};

export default Login;
