import { z } from "zod";
import User from "../../models/user";

export const checkUserEmail = z
  .string({ required_error: "Email is required." })
  .email({ message: "Invalid email address." })
  .refine(async (email) => !(await User.findOne({ email })), {
    message: "Email already exists",
  });
