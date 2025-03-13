import { IUpdateUser, IUserResponse } from "../../../types";

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUser): Promise<IUserResponse>;
}
