import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = ({ registerStorage, setRegister }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "O nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter: pelomenos 1 letra maiuscula, 1 letra minuscula, 1 caractere especial e 1 número"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A senha deve ser igual"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setRegister(!registerStorage);
    console.log(data);
    console.log(registerStorage);
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
            name="username"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.username?.message}</p>
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
            name="confirmPassword"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>
        <div>
          <button type="submit">Manda bala</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
