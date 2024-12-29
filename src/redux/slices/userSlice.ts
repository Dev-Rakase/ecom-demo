import { createSlice } from "@reduxjs/toolkit";
import { userLoginAction } from "../actions/userActions";
import { themesVariant } from "@/context/theme/themeConstant";

interface IUser {
  id: number;
  username: string;
  email: string;
  phone: string;
  theme: themesVariant;
  profile: string;
}
interface IState {
  loading: boolean;
  error?: null | string;
  data: IUser | {};
}

const initialState: IState = {
  loading: false,
  error: null,
  data: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = {};
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      const { token, ...payloadWithoutJWT } = action.payload;
      state.loading = false;
      state.error = null;
      state.data = payloadWithoutJWT;
    });
    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
