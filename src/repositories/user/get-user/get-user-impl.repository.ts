import { IUserResponse } from "../../../types";

export interface IGetUserRepository {
  getUser(id: string): Promise<IUserResponse | null>;
}
