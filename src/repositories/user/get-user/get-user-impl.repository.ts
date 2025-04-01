import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { IUserResponse, MongoUserSchema } from "../../../models/user";
import { IGetUserRepository } from "./get-user.repository";

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
