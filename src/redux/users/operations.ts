import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "'https://jsonplaceholder.typicode.com/";

export const fetchAllUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("users");
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error occurred");
    }
  }
);
