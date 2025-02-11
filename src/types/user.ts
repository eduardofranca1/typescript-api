import { ObjectId } from "mongodb";

export interface IUserResponse {
  _id: ObjectId | string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface UserSchema {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  disabled: boolean;
}

export interface MongoUserSchema {
  _id: ObjectId | string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUpdateUser {
  name: string;
  email: string;
}

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}
