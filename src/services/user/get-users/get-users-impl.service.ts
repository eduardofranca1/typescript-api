import { IUserResponse } from "../../../types";

export interface IGetUsersService {
  getUsers(): Promise<IUserResponse[]>;
}
