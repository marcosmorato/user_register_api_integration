import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container } from "../../components/StyledComponents/Container/styled";
import { Form, Reg, Row } from "../../components/StyledComponents/Forms/styled";
import { ButtonIni } from "../../components/StyledComponents/Button/styled";

const Login = (props) => {
  const history = useHistory();
  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha Invalida"
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
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Reg>
          <Row>
            <img src="https://img.icons8.com/fluent-systems-filled/48/000000/user-menu-male.png" />
            <input placeholder="Username?" name="user" ref={register}></input>
          </Row>
          <p>{errors.user?.message}</p>
        </Reg>
        <Reg>
          <Row>
            <img src="https://img.icons8.com/metro/48/000000/forgot-password.png" />
            <input
              placeholder="Password"
              name="password"
              type="password"
              ref={register}
            ></input>
          </Row>
          <p>{errors.password?.message}</p>
        </Reg>
        <Reg>
          <p>{errors.user_authentication?.message}</p>
          <ButtonIni type="submit">Entrar</ButtonIni>
        </Reg>
      </Form>
    </Container>
  );
};

export default Login;
