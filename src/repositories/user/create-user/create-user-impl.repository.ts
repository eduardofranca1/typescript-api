import { ICreateUserParams, IUserResponse } from "../../../types";

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUserResponse>;
}
