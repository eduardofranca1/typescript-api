import { ObjectId } from "mongodb";
import { IUpdateUserPassword } from "../../../types";
import { IUpdateUserPasswordService } from "./update-user-password.service";
import { IUpdateUserPasswordRepository } from "../../../repositories/user/update-user-password/update-user-password.repository";
import { compareHashPassword } from "../../../utils/compare-hash-password";
import { MongoClient } from "../../../database/mongo";
import { HttpException } from "../../../exceptions/exception";

export class UpdateUserPasswordService implements IUpdateUserPasswordService {
  constructor(
    private readonly updateUserPasswordRepository: IUpdateUserPasswordRepository
  ) {}
  async updatePassword(id: string, params: IUpdateUserPassword): Promise<void> {
    const user = await MongoClient.db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new HttpException("User not found", 404);
    }

    await compareHashPassword(params.oldPassword, user.password);

    await this.updateUserPasswordRepository.updateUserPassword(
      id,
      params.newPassword
    );
  }
}
