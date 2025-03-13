import { IUserResponse } from "../../../types";

export interface IGetUserService {
  getUser(id: string): Promise<IUserResponse>;
}
