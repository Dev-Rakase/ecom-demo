import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    data: {},
  },
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
