import "reflect-metadata";
import { injectable } from "tsyringe";
import { MongoClient } from "../../../database/mongo";
import { IUserResponse, MongoUserSchema } from "../../../types";
import { IGetUsersRepository } from "./get-users-impl.repository";

@injectable()
export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUserResponse[]> {
    const result = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .find({})
      .toArray();

    const formatResult = result.map((user) => ({
      _id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));

    return formatResult;
  }
}
