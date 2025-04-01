import { ObjectId } from "mongodb";
import { IDeleteUserService } from "./delete-user.service";
import { MongoClient } from "../../../database/mongo";
import { MongoUserSchema } from "../../../models/user";
import { HttpException } from "../../../exceptions/exception";
import { HttpEnumStatusCode } from "../../../exceptions/http-status-code";
import { IDeleteUserRepository } from "../../../repositories/user/delete-user/delete-user.repository";

export class DeleteUserService implements IDeleteUserService {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async deleteUser(id: string): Promise<void> {
    const user = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });
    if (!user) {
      throw new HttpException("User not found", HttpEnumStatusCode.NOT_FOUND);
    }
    await this.deleteUserRepository.deleteUser(id);
  }
}
