import { IUpdateUserPassword } from "../../../types";

export interface IUpdateUserPasswordService {
  updatePassword(id: string, params: IUpdateUserPassword): Promise<void>;
}
