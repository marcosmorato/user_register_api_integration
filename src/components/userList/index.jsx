import User from "../user";
import { Component, Table } from "../user/styled";

const UserList = ({ list, total }) => {
  return (
    <div style={{ width: 1500 }}>
      <thead>
        <tr>
          <th style={{ width: 100 }}>#</th>
          <th style={{ width: 350 }}>Name</th>
          <th style={{ width: 400 }}>User</th>
          <th style={{ width: 400 }}>Email</th>
          <th style={{ width: 100 }}>Go to Feedback</th>
          <th style={{ width: 100 }}>New Feedback</th>
        </tr>
      </thead>

      {list.map(({ id, name, user, email }, index) => (
        <User
          key={index}
          id={id}
          name={name}
          user={user}
          email={email}
          total={total}
        />
      ))}
    </div>
  );
};

export default UserList;
