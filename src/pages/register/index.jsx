import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <span>Nome:</span>
          <input
            placeholder="What's your username?"
            name="name"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>
        <div>
          <span>Usuario:</span>
          <input
            placeholder="What's your username?"
            name="user"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.user?.message}</p>
        </div>
        <div>
          <span>Email:</span>
          <input
            placeholder="put your email"
            name="email"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
        <div>
          <span>Senha:</span>
          <input
            placeholder="put your password"
            name="password"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>
        <div>
          <span>Confirme sua senha:</span>
          <input
            placeholder="confirm your password"
            name="password_confirmation"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>
            {errors.password_confirmation?.message}
          </p>
        </div>
        <div>
          <p style={{ color: "red" }}>{errors.user_register?.message}</p>
          <button type="submit">Manda bala</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
