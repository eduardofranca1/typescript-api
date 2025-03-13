import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IUpdateUser, IUserResponse, MongoUserSchema } from "../../../types";
import { IUpdateUserService } from "./update-user.service";
import { IUpdateUserRepository } from "../../../repositories/user/update-user/update-user.repository";
import { HttpException } from "../../../exceptions/exception";
import { HttpEnumStatusCode } from "../../../exceptions/http-status-code";

@injectable()
export class UpdateUserService implements IUpdateUserService {
  constructor(
    @inject("IUpdateUserRepository")
    private readonly updateUpserRepository: IUpdateUserRepository
  ) {}
  async updateUser(id: string, params: IUpdateUser): Promise<IUserResponse> {
    const user = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });
    if (!user) {
      throw new HttpException("User not found", HttpEnumStatusCode.NOT_FOUND);
    }
    const result = await this.updateUpserRepository.updateUser(id, params);
    return result;
  }
}
