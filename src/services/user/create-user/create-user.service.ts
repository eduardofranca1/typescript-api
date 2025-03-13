import { ICreateUserParams, IUserResponse } from "../../../types";

export interface ICreateUserService {
  createUser(params: ICreateUserParams): Promise<IUserResponse>;
}
