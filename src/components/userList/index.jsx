import User from "../user";
import { TableRow } from "../StyledComponents/Table/styled";

const UserList = ({ list, total }) => {
  return list.map(({ id, name, user, email }, index) => (
    <TableRow key={index}>
      <User id={id} name={name} user={user} email={email} total={total} />
    </TableRow>
  ));
};

export default UserList;
