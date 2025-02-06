import { z } from "zod";
import { checkUserEmail } from "../validations/string";

export const createUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required.",
      })
      .trim()
      .min(1, { message: "Name must contain at least 1 character(s)" }),
    email: checkUserEmail,
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must contain at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must be equals",
    path: ["confirmPassword"],
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
