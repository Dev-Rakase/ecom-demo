import { z } from "zod";

export const userLoginSchema = z.object({
  username: z.string().min(4, { message: "Username not valid" }),
  password: z.string().min(8, { message: "Password is invalid" }),
});
