const Feedback = (props) => {
  return (
    <div>
      <span>{props.id} </span>
      <span> {props.name} </span>
      <span> {props.comment} </span>
      {props.creator ? (
        <span> {props.creator.name} </span>
      ) : (
        <div>my creator don't have name</div>
      )}
      {props.creator ? (
        <span> {props.creator.user} </span>
      ) : (
        <div>my creator don't have name</div>
      )}
      <span> {props.grade} </span>
    </div>
  );
};

export default Feedback;
