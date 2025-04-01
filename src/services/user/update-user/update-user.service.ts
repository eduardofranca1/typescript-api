import { IUpdateUser, IUserResponse } from "../../../models/user";

export interface IUpdateUserService {
  updateUser(id: string, params: IUpdateUser): Promise<IUserResponse>;
}
