import { USER_JWT_KEY } from "@/redux/constant/userConstant";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL + "/api/v1",
});

API.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync(USER_JWT_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    console.log({ err });
    return Promise.reject(err);
  }
);

export default API;
