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
    return result;
  }
}
