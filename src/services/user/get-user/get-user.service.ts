import { IUserResponse } from "../../../models/user";

export interface IGetUserService {
  getUser(id: string): Promise<IUserResponse>;
}
