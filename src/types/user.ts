import { ObjectId } from "mongodb";

export interface IUserCreatedResponse {
  _id: string;
  name: string;
  email: string;
}

export interface UserSchema {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  disabled: boolean;
}

export interface MongoCreateUserSchema {
  name: string;
  email: string;
  password: string;
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

export interface UpdateUser {
  name: string;
  email: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}
