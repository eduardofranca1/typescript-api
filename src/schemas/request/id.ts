import { z } from "zod";

export const requestIdSchema = z.object({
  id: z.string({ required_error: "ID is required" }),
  // .min(1, { message: "ID is required" }),
});

export type RequestIdSchema = z.infer<typeof requestIdSchema>;
