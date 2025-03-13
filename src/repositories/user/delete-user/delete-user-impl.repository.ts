import "reflect-metadata";
import { injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IDeleteUserRepository } from "./delete-user.repository";
import { MongoUserSchema } from "../../../types";

@injectable()
export class DeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<void> {
    await MongoClient.db
      .collection<MongoUserSchema>("users")
      .deleteOne({ _id: new ObjectId(id) });
  }
}
