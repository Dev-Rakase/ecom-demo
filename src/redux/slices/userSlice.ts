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
  data: IUser | null;
}

const initialState: IState = {
  loading: false,
  error: null,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      const { token, ...payloadWithoutJWT } = action.payload;
      state.loading = false;
      state.error = null;
      state.data = payloadWithoutJWT;
    });
    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
