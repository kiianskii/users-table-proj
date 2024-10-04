import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filter/slice"; // Імпорт нового селектора
import { selectUsers } from "./users/slice";

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter((item) => {
      return (
        item.name.toLowerCase().includes(lowerCaseFilter) ||
        item.username.toLowerCase().includes(lowerCaseFilter) ||
        item.email.toLowerCase().includes(lowerCaseFilter) ||
        item.phone.toLowerCase().includes(lowerCaseFilter)
      );
    });
  }
);
