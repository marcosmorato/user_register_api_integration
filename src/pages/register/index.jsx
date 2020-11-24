import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "../../components/StyledComponents/Container/styled";
import { ButtonIni } from "../../components/StyledComponents/Button/styled";
import { Form, Row, Reg } from "../../components/StyledComponents/Forms/styled";

const Register = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "O nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    user: yup.string().required("Campo obrigatório"),
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter: pelomenos 1 letra maiuscula, 1 letra minuscula, 1 caractere especial e 1 número"
      )
      .required("Campo obrigatório"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "A senha deve ser igual"),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = (data) => {
    axios
      .post("https://ka-users-api.herokuapp.com/users", { user: data })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) =>
        setError("user_register", {
          message: "email ou usuário ja existentes",
        })
      );
  };
  return (
    <Container>
      <h1>Cadastro</h1>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Reg>
          <p>{errors.name?.message}</p>
          <Row>
            <img src="https://img.icons8.com/ios-glyphs/50/000000/user--v1.png" />
            <input placeholder="Name" name="name" ref={register}></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.user?.message}</p>
          <Row>
            <img src="https://img.icons8.com/fluent-systems-filled/48/000000/user-menu-male.png" />
            <input placeholder="Username" name="user" ref={register}></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.email?.message}</p>
          <Row>
            <img src="https://img.icons8.com/metro/48/000000/email.png" />
            <input placeholder="Email" name="email" ref={register}></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.password?.message}</p>
          <Row>
            <img src="https://img.icons8.com/metro/48/000000/forgot-password.png" />
            <input
              placeholder="Password"
              name="password"
              ref={register}
              type="password"
            ></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.password_confirmation?.message}</p>
          <Row>
            <img src="https://img.icons8.com/fluent-systems-filled/48/000000/security-shield-green.png" />
            <input
              placeholder="Confirm your password"
              name="password_confirmation"
              ref={register}
              type="password"
            ></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.user_register?.message}</p>
          <ButtonIni type="submit">Register</ButtonIni>
        </Reg>
      </Form>
    </Container>
  );
};

export default Register;
