import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Reg, Row } from "../../components/StyledComponents/Forms/styled";
import { Container } from "../../components/StyledComponents/Container/styled";
import {
  ButtonBack,
  ButtonSend,
} from "../../components/StyledComponents/Button/styled";

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
      .typeError("A nota deve ser um número")
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
    <Container>
      <h1>Novo Feedback</h1>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Reg>
          <p>{errors.name?.message}</p>
          <Row>
            <img src="https://img.icons8.com/ios-glyphs/50/000000/user--v1.png" />{" "}
            <input
              placeholder="What's your name?"
              name="name"
              ref={register}
            ></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.comment?.message}</p>
          <Row>
            <img src="https://img.icons8.com/ios/50/000000/send-comment.png" />{" "}
            <input
              placeholder="tell me your feedback"
              name="comment"
              ref={register}
            ></input>
          </Row>
        </Reg>
        <Reg>
          <p>{errors.grade?.message}</p>
          <Row>
            <img src="https://img.icons8.com/ios-filled/50/000000/grades.png" />{" "}
            <input
              placeholder="what grade do you give me?"
              name="grade"
              type="number"
              ref={register}
            ></input>
          </Row>
        </Reg>
        <ButtonSend type="submit">Send</ButtonSend>
      </Form>
      <ButtonBack onClick={() => history.push(`/users/${userId}/feedbacks`)}>
        Go back
      </ButtonBack>
    </Container>
  );
};

export default NewFeedbacks;
