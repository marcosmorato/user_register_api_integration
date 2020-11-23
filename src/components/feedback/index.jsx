const Feedback = (props) => {
  return (
    <>
      <td>{props.id} </td>
      <td> {props.name} </td>
      <td> {props.comment} </td>
      {props.creator ? (
        <td> {props.creator.name} </td>
      ) : (
        <div>my creator don't have name</div>
      )}
      {props.creator ? (
        <td> {props.creator.user} </td>
      ) : (
        <div>my creator don't have name</div>
      )}
      <td> {props.grade} </td>
    </>
  );
};

export default Feedback;
