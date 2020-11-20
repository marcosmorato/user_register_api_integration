import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Login = ({ login, setLocalStorage }) => {
  const a = login.length;

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter: pelomenos 1 letra maiuscula, 1 letra minuscula, 1 caractere especial e 1 número"
      )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  //validar API aqui, testar se ja tem cadastro
  const handleForm = (data) => {
    setLocalStorage(!login);
    console.log(data);
    console.log(login);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <span> Usuario: </span>
          <input
            placeholder="What's your username?"
            name="username"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.username?.message}</p>
        </div>

        <div>
          <span> Senha: </span>

          <input
            placeholder="put your password"
            name="password"
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