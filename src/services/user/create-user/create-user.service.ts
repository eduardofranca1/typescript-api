import { ICreateUserParams, IUserResponse } from "../../../models/user";

export interface ICreateUserService {
  createUser(params: ICreateUserParams): Promise<IUserResponse>;
}
