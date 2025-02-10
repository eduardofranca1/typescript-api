import { IUserResponse } from "../../../types";

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUserResponse>;
}
