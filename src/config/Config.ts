import { config } from "dotenv";

config();

export const mongodb_url = process.env.MONGODB_URL as string;
export const mongodb_database = process.env.MONGODB_DATABASE as string;
export const mongodb_databasetest = process.env.MONGODB_TEST as string;
export const tokenSecret = process.env.TOKEN_SECRET as string;
