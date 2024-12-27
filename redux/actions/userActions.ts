import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLoginAction = createAsyncThunk("user/login", () => {
  return true;
});
