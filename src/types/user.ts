import { ObjectId } from "mongodb";

export interface IUserResponse {
  _id: string;
  name: string;
  email: string;
}

export interface IUser {
  _id: ObjectId | string;
  name: string;
  email: string;
  password: string;
  disabled: boolean;
  createdAt: string;
  updatedAt: string;
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
  disabled: boolean;
}

export interface IUpdateUser {
  name: string;
  email: string;
}
