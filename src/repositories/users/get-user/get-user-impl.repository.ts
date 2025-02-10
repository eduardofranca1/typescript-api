import { IUser } from "../../../types";

export interface IGetUserRepository {
  getUser(id: string): Promise<IUser>;
}
