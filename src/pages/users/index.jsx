import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import UserList from "../../components/userList";
import Feedback from "../feedbacks";

const MembersArea = () => {
  const [userList, setUserList] = useState([]);
  const token = window.localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get("https://ka-users-api.herokuapp.com/users", {
        headers: { Authorization: token },
      })
      .then((res) => setUserList(res.data.sort((a, b) => a.id - b.id)));
  }, []);

  console.log(userList);
  return (
    <>
      <Link to="/users">Users</Link>

      <Switch>
        <Route path="/users/:userId/feedbacks">
          <Feedback />
        </Route>
        <Route path="/users">
          <UserList list={userList} />
        </Route>
      </Switch>
    </>
  );
};

export default MembersArea;
