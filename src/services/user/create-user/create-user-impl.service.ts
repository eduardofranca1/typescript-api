import { IUserCreatedResponse } from "../../../types";

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserService {
  createUser(params: ICreateUserParams): Promise<IUserCreatedResponse>;
}
