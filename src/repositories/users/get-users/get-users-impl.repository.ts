import { IUser } from "../../../types";

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}
