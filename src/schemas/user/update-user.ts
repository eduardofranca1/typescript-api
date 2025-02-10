import { z } from "zod";

export const updateUserSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
    })
    .trim()
    .min(1, { message: "Name must contain at least 1 character(s)" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
