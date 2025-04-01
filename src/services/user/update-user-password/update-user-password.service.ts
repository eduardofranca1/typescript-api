import { IUpdateUserPassword } from "../../../models/user";

export interface IUpdateUserPasswordService {
  updatePassword(id: string, params: IUpdateUserPassword): Promise<void>;
}
