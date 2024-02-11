import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "test",
      });
    }, 1000);
  });
};

export const getUserById = createAsyncThunk(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const res = await fetchUserById(userId);
      return res;
    } catch (error) {
      thunkApi.rejectWithValue({});
    }
  }
);
