import { z } from "zod";

export const requestIdSchema = z.object({
  id: z.string({ required_error: "ID is required" }).length(24),
});

export type RequestIdSchema = z.infer<typeof requestIdSchema>;
