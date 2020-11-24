import { useHistory } from "react-router-dom";
import { TableCell } from "../../pages/users/style";
import { ButtonGo } from "../buttonLogout/styled";

const User = (props) => {
  const history = useHistory();
  const getFeedback = () => {
    history.push(`/users/${props.id}/feedbacks`);
  };
  const newFeedback = () => {
    history.push(`/users/${props.id}/feedbacks/new`);
  };
  return (
    <>
      <TableCell> {props.id} </TableCell>
      <TableCell> {props.name} </TableCell>
      <TableCell> {props.user} </TableCell>
      <TableCell> {props.email} </TableCell>
      <TableCell>
        <ButtonGo onClick={getFeedback}>Go to feedback</ButtonGo>
      </TableCell>
      <TableCell>
        <ButtonGo onClick={newFeedback}>New feedback</ButtonGo>
      </TableCell>
    </>
  );
};

export default User;
