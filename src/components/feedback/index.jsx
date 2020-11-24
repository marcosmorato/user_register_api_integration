import { TableCell } from "../StyledComponents/Table/styled";

const Feedback = (props) => {
  return (
    <>
      <TableCell>{props.id} </TableCell>
      <TableCell> {props.name} </TableCell>
      <TableCell> {props.comment} </TableCell>
      {props.creator ? (
        <TableCell> {props.creator.name} </TableCell>
      ) : (
        <TableCell>my creator don't have name</TableCell>
      )}
      {props.creator ? (
        <TableCell> {props.creator.user} </TableCell>
      ) : (
        <TableCell>my creator don't have name</TableCell>
      )}
      <TableCell> {props.grade} </TableCell>
    </>
  );
};

export default Feedback;
