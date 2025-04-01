import { IUserResponse } from "../../../models/user";

export interface IGetUsersRepository {
  getUsers(): Promise<IUserResponse[]>;
}
