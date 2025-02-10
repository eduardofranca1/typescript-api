import { WithId } from "mongodb";
import { IUserResponse } from "../types";

export interface MongoUser {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  disabled: boolean;
}

export const formatUser = (user: WithId<MongoUser>): IUserResponse => {
  const { _id, name, email } = user;
  return {
    _id: _id.toHexString(),
    name: name,
    email: email,
  };
};
