import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stateFilter {
  filter: string;
}

type Filter = string;

const initialState: stateFilter = {
  filter: "",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectFilter: (state) => state.filter,
  },
  reducers: {
    changeSearchStr: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const { changeSearchStr } = sliceFilter.actions;
export const { selectFilter } = sliceFilter.selectors;
