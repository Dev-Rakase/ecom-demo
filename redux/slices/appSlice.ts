import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themesVariant } from "../../context/theme/themeConstant";

interface IState {
  theme: themesVariant;
}

const initialState: IState = {
  theme: "brand",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<themesVariant>) {
      state.theme = action.payload;
    },
  },
});

export const { actions: appActions, reducer: appReducer } = appSlice;
