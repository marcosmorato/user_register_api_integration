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
    <div>
      <tbody>
        <tr>
          <td style={{ width: 100 }}> {props.id} </td>
          <td style={{ width: 350 }}> {props.name} </td>
          <td style={{ width: 400 }}> {props.user} </td>
          <td style={{ width: 400 }}> {props.email} </td>
          <td style={{ width: 100 }}>
            <button onClick={getFeedback}>Go to feedback</button>
          </td>
          <td style={{ width: 100 }}>
            <button onClick={newFeedback}>New feedback</button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default User;
