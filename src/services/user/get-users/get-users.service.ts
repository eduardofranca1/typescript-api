import { IUserResponse } from "../../../models/user";

export interface IGetUsersService {
  getUsers(): Promise<IUserResponse[]>;
}
