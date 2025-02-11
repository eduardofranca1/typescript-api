import "reflect-metadata";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IUpdateUser, IUserResponse, MongoUserSchema } from "../../../types";
import { IUpdateUserService } from "./update-user-impl.service";
import { inject, injectable } from "tsyringe";
import { IUpdateUserRepository } from "../../../repositories/users/update-user/update-user-impl.repository";

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

    if (!user) throw new Error("User not found");

    const result = await this.updateUpserRepository.updateUser(id, params);

    return result;
  }
}
