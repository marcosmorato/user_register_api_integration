import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Container, Table } from "./styled";

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
      <td> {props.id} </td>
      <td> {props.name} </td>
      <td> {props.user} </td>
      <td> {props.email} </td>
      <td>
        <button onClick={getFeedback}>Go to feedback</button>
      </td>
      <td>
        <button onClick={newFeedback}>New feedback</button>
      </td>
    </>
  );
};

export default User;
