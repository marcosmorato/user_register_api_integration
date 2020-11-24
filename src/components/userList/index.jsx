import User from "../user";
import { TableRow } from "../../pages/users/style";

const UserList = ({ list, total }) => {
  return list.map(({ id, name, user, email }, index) => (
    <TableRow>
      <User
        key={index}
        id={id}
        name={name}
        user={user}
        email={email}
        total={total}
      />
    </TableRow>
  ));
};

export default UserList;
