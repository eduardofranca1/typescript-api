import "reflect-metadata";
import { injectable } from "tsyringe";
import { MongoClient } from "../../../database/mongo";
import { IUser, MongoUserSchema } from "../../../types";
import { IGetUsersRepository } from "./get-users-impl.repository";

@injectable()
export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const result = await MongoClient.db
      .collection<IUser>("users")
      .find({})
      .toArray();
    return result;
  }
}
