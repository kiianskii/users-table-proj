// import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";
import { filterReducer } from "./filter/slice";

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     filter: filterReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
