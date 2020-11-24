import Feedback from "../feedback";
import { TableRow } from "../StyledComponents/Table/styled";

const FeedbackList = ({ list }) => {
  return list.map(({ id, name, comment, grade }, index) => (
    <TableRow key={index}>
      <Feedback
        id={id}
        name={name}
        comment={comment}
        grade={grade}
        creator={list[index].creator}
      />
    </TableRow>
  ));
};

export default FeedbackList;
