import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = {};
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = { id: 1 };
    });
    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = null;
      console.log(action.error);
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
