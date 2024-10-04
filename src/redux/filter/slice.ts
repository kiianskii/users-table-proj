import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateFilter {
  filter: string; // Єдине поле для фільтрації
}

const initialState: StateFilter = {
  filter: "",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload; // Оновлення єдиного поля
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const { changeFilter } = sliceFilter.actions;
export const selectFilter = (state: any) => state.filter.filter; // Адаптуйте тип state
