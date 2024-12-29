import API from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoginSchema } from "schema/user.schema";
import { z } from "zod";
import * as SecureStore from "expo-secure-store";
import { USER_JWT_KEY } from "../constant/userConstant";
import { Platform } from "react-native";
import { ImagePickerAsset } from "expo-image-picker";

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

export const updateUserProfileAction = createAsyncThunk(
  "user/update",
  async (payload: ImagePickerAsset) => {
    return true;
    // Backend server have some problem to handle this api call
    const form = new FormData();
    form.append("profile", {
      ...payload,
      uri:
        Platform.OS === "android"
          ? payload.uri
          : payload.uri.replace("file://", ""),
      name: payload.fileName,
      type: payload.mimeType || "image/jpeg",
    } as unknown as Blob);

    const { data } = await API.put("/user/profile", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(data);

    return data.data;
  }
);
