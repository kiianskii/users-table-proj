import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stateFilter {
  name: string;
  username: string;
  email: string;
  phone: string;
}

type Filter = string;

const initialState: stateFilter = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectName: (state) => state.name,
    selectUsername: (state) => state.username,
    selectEmail: (state) => state.email,
    selectPhone: (state) => state.phone,
  },
  reducers: {
    changeNameFilter: (state, action: PayloadAction<Filter>) => {
      state.name = action.payload;
    },
    changeUsernameFilter: (state, action: PayloadAction<Filter>) => {
      state.username = action.payload;
    },
    changeEmailFilter: (state, action: PayloadAction<Filter>) => {
      state.email = action.payload;
    },
    changePhoneFilter: (state, action: PayloadAction<Filter>) => {
      state.phone = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const {
  changeEmailFilter,
  changeNameFilter,
  changePhoneFilter,
  changeUsernameFilter,
} = sliceFilter.actions;
export const { selectEmail, selectName, selectPhone, selectUsername } =
  sliceFilter.selectors;
