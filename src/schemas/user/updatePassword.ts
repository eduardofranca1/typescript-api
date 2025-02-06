import { z } from "zod";

export const updatePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .trim()
      .min(1, { message: "Old password cannot be empty" }),
    newPassword: z
      .string()
      .trim()
      .min(1, { message: "New password cannot be empty" }),
    confirmNewPassword: z
      .string()
      .trim()
      .min(1, { message: "Confirm new password cannot be empty" }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "The new passwords must be equals",
    path: ["confirmNewPassword"],
  });

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
