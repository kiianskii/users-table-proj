import React from "react";
import { useSelector } from "react-redux";

import UserItem from "../UserItem/UserItem";
import s from "./UserTable.module.css";
import { selectFilteredUsers } from "../../redux/selectors";

const UsersTable = () => {
  const users = useSelector(selectFilteredUsers);

  return (
    <div>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.headline}>Name</th>
            <th className={s.headline}>Username</th>
            <th className={s.headline}>Email</th>
            <th className={s.headline}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserItem user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
