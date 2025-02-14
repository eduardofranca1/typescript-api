import { inject, injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import { IUpdateUserPassword } from "../../../types";
import { IUpdateUserPasswordService } from "./update-user-password-impl.service";
import { IUpdateUserPasswordRepository } from "../../../repositories/user/update-user-password/update-user-password-impl.repository";
import { IGetUserService } from "../get-user/get-user-impl.service";
import { compareHashPassword } from "../../../utils/compare-hash-password";
import { MongoClient } from "../../../database/mongo";
import { HttpException } from "../../../exceptions/exception";

@injectable()
export class UpdateUserPassword implements IUpdateUserPasswordService {
  constructor(
    @inject("IGetUserService")
    private readonly getUserService: IGetUserService,

    @inject("IUpdateUserPasswordRepository")
    private readonly updateUserPasswordRepository: IUpdateUserPasswordRepository
  ) {}
  async updatePassword(id: string, params: IUpdateUserPassword): Promise<void> {
    const user = await MongoClient.db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });

    // verificar uma forma se possui uma opçao igual no mongoose (select: {"password"}) para pegar a senha
    // const user = await this.getUserService.getUser(id);

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
