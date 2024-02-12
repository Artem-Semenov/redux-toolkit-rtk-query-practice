import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.types";

const fetchUserById = (userId: number): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "test",
      });
    }, 1000);
  });
};

export const getUserById = createAsyncThunk<IUser, number>(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const res = await fetchUserById(userId);
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue({});
    }
  }
);
