import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/slice";

const UsersTable = () => {
  const users = useSelector(selectUsers);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li>
            <h3>Name: {user.name}</h3>
            <h3>Username: {user.username}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersTable;
