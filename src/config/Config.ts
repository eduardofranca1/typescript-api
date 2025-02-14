import { config } from "dotenv";

config();

export const mongodb_url = process.env.MONGODB_URL as string;
export const mongodb_database = process.env.MONGODB_DATABASE as string;
export const mongodb_database_test = process.env
  .MONGODB_DATABASE_TEST as string;
