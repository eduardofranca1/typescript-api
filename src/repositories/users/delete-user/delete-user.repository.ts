import "reflect-metadata";
import { injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IDeleteUserRepository } from "./delete-user-impl.repository";
import { MongoUserSchema } from "../../../types";

@injectable()
export class DeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<void> {
    const user = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new Error("User not found");

    await MongoClient.db
      .collection<MongoUserSchema>("users")
      .deleteOne({ _id: user._id });
  }
}
