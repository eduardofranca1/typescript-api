import { IUpdateUser, IUserResponse } from "../../../types";

export interface IUpdateUserService {
  updateUser(id: string, params: IUpdateUser): Promise<IUserResponse>;
}
