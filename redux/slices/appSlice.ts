import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themesVariant } from "../../context/theme/themeConstant";

interface IState {
  theme: themesVariant;
  onboarded: boolean;
}

const initialState: IState = {
  theme: "brand",
  onboarded: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<themesVariant>) {
      state.theme = action.payload;
    },
    setOnboarded(state) {
      state.onboarded = true;
    },
  },
});

export const { actions: appActions, reducer: appReducer } = appSlice;
