import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllUsersThunk } from "./operations";

interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface ContactsState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ContactsState = {
  users: [],
  isLoading: false,
  isError: false,
};

const sliceUsers = createSlice({
  name: "users",
  initialState,
  reducers: {},
  selectors: {
    selectUsers: (state) => state.users,
    selectIsError: (state) => state.isError,
    selectIsLoading: (state) => state.isLoading,
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllUsersThunk.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.users = action.payload;
          state.isLoading = false;
          state.isError = false;
        }
      )
      .addCase(fetchAllUsersThunk.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUsersThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const usersReducer = sliceUsers.reducer;

export const { selectUsers, selectIsLoading, selectIsError } =
  sliceUsers.selectors;
