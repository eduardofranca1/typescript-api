import { IUpdateUser, IUserResponse } from "../../../models/user";

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUser): Promise<IUserResponse>;
}
