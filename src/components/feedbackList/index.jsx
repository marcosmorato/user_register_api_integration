import Feedback from "../feedback";

const FeedbackList = ({ list }) => {
  return list.map(({ id, name, comment, grade }, index) => (
    <tr>
      <Feedback
        key={index}
        id={id}
        name={name}
        comment={comment}
        grade={grade}
        creator={list[index].creator}
      />
    </tr>
  ));
};

export default FeedbackList;
