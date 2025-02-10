import "reflect-metadata";
import { injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IUser, MongoUserSchema } from "../../../types";
import { IGetUserRepository } from "./get-user-impl.repository";

@injectable()
export class GetUserRepository implements IGetUserRepository {
  async getUser(id: string): Promise<IUser> {
    const result = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!result) throw new Error("User not found");

    return result;
  }
}
