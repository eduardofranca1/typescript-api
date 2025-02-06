import { MongoClient } from "../../../database/mongo";
import { IUserResponse, MongoUser } from "../../../types";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "./create-user-impl.repository";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created");
    }

    return {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    };
  }
}
