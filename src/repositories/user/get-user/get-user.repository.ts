import "reflect-metadata";
import { injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IUserResponse, MongoUserSchema } from "../../../types";
import { IGetUserRepository } from "./get-user-impl.repository";

@injectable()
export class GetUserRepository implements IGetUserRepository {
  async getUser(id: string): Promise<IUserResponse | null> {
    const result = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });

    if (result) {
      return {
        _id: result._id,
        name: result.name,
        email: result.email,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      };
    }

    return null;
  }
}
