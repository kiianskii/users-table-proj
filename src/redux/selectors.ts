import { createSelector } from "@reduxjs/toolkit";
import {
  selectEmail,
  selectName,
  selectPhone,
  selectUsername,
} from "./filter/slice";
import { selectUsers } from "./users/slice";

export const selectFilteredUsers = createSelector(
  [selectUsers, selectName, selectUsername, selectEmail, selectPhone],
  (contacts, name, username, email, phone) => {
    return contacts
      .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
      .filter((item) =>
        item.username.toLowerCase().includes(username.toLowerCase())
      )
      .filter((item) => item.email.toLowerCase().includes(email.toLowerCase()))
      .filter((item) => item.phone.toLowerCase().includes(phone.toLowerCase()));
  }
);
