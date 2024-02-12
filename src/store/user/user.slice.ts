import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";
import { IUser, IinitialUserState } from "../../types/user.types";

const initialState: IinitialUserState = {
  isLoading: false,
  error: null,
  user: {} as IUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserById.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user = {} as IUser;
      }
    );
    builder.addCase(
      getUserById.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.user = action.payload;
      }
    );
  },
});

export const { actions, reducer } = userSlice;
