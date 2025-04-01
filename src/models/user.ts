import { ObjectId } from "mongodb";

export interface MongoUserSchema {
  _id: ObjectId | string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse {
  _id: ObjectId | string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string | null;
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

export interface IUpdateUserPassword {
  oldPassword: string;
  newPassword: string;
}
