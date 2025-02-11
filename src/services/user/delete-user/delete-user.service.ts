import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IDeleteUserService } from "./delete-user-impl.service";
import { IDeleteUserRepository } from "../../../repositories/user/delete-user/delete-user-impl.repository";
import { MongoClient } from "../../../database/mongo";
import { MongoUserSchema } from "../../../types";
import { ObjectId } from "mongodb";

@injectable()
export class DeleteUserService implements IDeleteUserService {
  constructor(
    @inject("IDeleteUserRepository")
    private readonly deleteUserRepository: IDeleteUserRepository
  ) {}
  async deleteUser(id: string): Promise<void> {
    const user = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new Error("User not found");

    await this.deleteUserRepository.deleteUser(id);
  }
}
