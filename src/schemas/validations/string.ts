import { z } from "zod";
import { MongoClient } from "../../database/mongo";

export const checkUserEmail = z
  .string({ required_error: "Email is required." })
  .email({ message: "Invalid email address." })
  .refine(
    async (email) =>
      !(await MongoClient.db.collection("users").findOne({ email: email })),
    {
      message: "Email already exists",
    }
  );
