import User from "../user";

const UserList = ({ list }) => {
  console.log(list, "eu sou lista");

  return list.map(({ id, name, user, email }, index) => (
    <User key={index} id={id} name={name} user={user} email={email} />
  ));
};

export default UserList;
