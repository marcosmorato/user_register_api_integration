const Feedback = (props) => {
  return (
    <div>
      <span>{props.id} </span>
      <span> {props.name} </span>
      <span> {props.comment} </span>
      <span> {props.creator.name} </span>
      <span> {props.creator.user} </span>
      <span> {props.grade} </span>
    </div>
  );
};

export default Feedback;
