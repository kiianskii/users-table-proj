import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filter/slice";
import { selectUsers } from "./users/slice";

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (contacts, searchStr) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
);
