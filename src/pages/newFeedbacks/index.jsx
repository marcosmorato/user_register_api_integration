import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Main, Form, Name, Comment, Grade } from "./styled";

const NewFeedbacks = () => {
  const { userId } = useParams();
  const history = useHistory();
  const token = window.localStorage.getItem("authToken");
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "O nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    comment: yup.string().required("Campo Obrigatório"),
    grade: yup
      .number()
      .integer()
      .positive("A nota deve ser um número positivo")
      .required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = (data) => {
    axios
      .post(
        `https://ka-users-api.herokuapp.com/users/${userId}/feedbacks`,
        { feedback: data },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        history.push(`/users/${userId}/feedbacks`);
      });
  };
  return (
    <Main>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Name>
          Nome:
          <input
            placeholder="What's your name?"
            name="name"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </Name>
        <Comment>
          Comment:
          <input
            placeholder="tell me your history"
            name="comment"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.comment?.message}</p>
        </Comment>
        <Grade>
          Grade:
          <input
            placeholder="what grade do you give me?"
            name="grade"
            type="number"
            ref={register}
          ></input>
          <p style={{ color: "red" }}>{errors.grade?.message}</p>
        </Grade>
        <button type="submit">enviar</button>
      </Form>
      <button onClick={() => history.push(`/users/${userId}/feedbacks`)}>
        Go back
      </button>
    </Main>
  );
};

export default NewFeedbacks;
