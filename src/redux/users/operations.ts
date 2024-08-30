import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const fetchAllUsersThunk = createAsyncThunk<User[]>(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<User[]>("users");
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error occurred");
    }
  }
);
