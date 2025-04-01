import { IUserResponse } from "../../../models/user";

export interface IGetUserRepository {
  getUser(id: string): Promise<IUserResponse | null>;
}
