import User from "../user";
import { Component, Table } from "../user/styled";

const UserList = ({ list, total }) => {
  return list.map(({ id, name, user, email }, index) => (
    <tr key={index}>
      <User id={id} name={name} user={user} email={email} total={total} />
    </tr>
  ));
};

export default UserList;
