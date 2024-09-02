import React from "react";

import s from "./UserItem.module.css";

interface User {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const UserItem: React.FC<User> = ({ user }) => {
  return (
    <tr className={s.rowline}>
      <td className={s.row}>{user.name}</td>
      <td className={s.row}>{user.username}</td>
      <td className={s.row}> {user.email}</td>
      <td className={s.row}>{user.phone}</td>
    </tr>
  );
};

export default UserItem;
