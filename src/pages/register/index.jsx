import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "../../components/authenticator/styled";
import { Form, User, Name, Email, Pass, ConfirmPass } from "./style";

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
      <Form onSubmit={handleSubmit(handleForm)}>
        <Name>
          <div></div>
          <input placeholder="Name" name="name" ref={register}></input>
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </Name>
        <User>
          <div></div>
          <input placeholder="Username" name="user" ref={register}></input>
          <p style={{ color: "red" }}>{errors.user?.message}</p>
        </User>
        <Email>
          <div></div>
          <input placeholder="Email" name="email" ref={register}></input>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </Email>
        <Pass>
          <div></div>
          <input placeholder="Password" name="password" ref={register}></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </Pass>
        <ConfirmPass>
          <div></div>
          <input
            placeholder="Confirm your password"
            name="password_confirmation"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>
            {errors.password_confirmation?.message}
          </p>
        </ConfirmPass>
        <div>
          <p style={{ color: "red" }}>{errors.user_register?.message}</p>
          <button type="submit">Register</button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
