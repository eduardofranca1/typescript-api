import { ICreateUserParams, IUserResponse } from "../../../models/user";

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUserResponse>;
}
