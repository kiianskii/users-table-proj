import React from "react";
import { useSelector } from "react-redux";

import s from "./UserTable.module.css";

import UserItem from "../UserItem/UserItem";
import { selectFilteredUsers } from "../../redux/selectors";

const UsersTable = () => {
  const users = useSelector(selectFilteredUsers);

  if (users.length === 0) {
    return <h2>No users avaliable</h2>;
  } else {
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
          <tbody className={s.body}>
            {users.map((user) => {
              return <UserItem key={user.username} user={user} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default UsersTable;
