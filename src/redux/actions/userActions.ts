import API from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoginSchema } from "schema/user.schema";
import { z } from "zod";
import * as SecureStore from "expo-secure-store";
import { USER_JWT_KEY } from "../constant/userConstant";

export const userLoginAction = createAsyncThunk(
  "user/login",
  async (payload: z.infer<typeof userLoginSchema>, { rejectWithValue }) => {
    const { data } = await API.post("/auth/login", payload);

    if (data.data.token) {
      await SecureStore.setItemAsync(USER_JWT_KEY, data.data.token);
    }

    return data.data;
  }
);
