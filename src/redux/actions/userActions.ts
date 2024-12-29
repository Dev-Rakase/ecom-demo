import API from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoginSchema } from "schema/user.schema";
import { z } from "zod";

export const userLoginAction = createAsyncThunk(
  "user/login",
  async (payload: z.infer<typeof userLoginSchema>) => {
    // const { data } = await API.post("/auth/login", payload);
    // return data;
    return true;
  }
);
