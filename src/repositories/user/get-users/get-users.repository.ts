import { IUserResponse } from "../../../types";

export interface IGetUsersRepository {
  getUsers(): Promise<IUserResponse[]>;
}
