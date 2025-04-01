import moment from "moment";
import { MongoClient } from "../../../database/mongo";
import {
  ICreateUserParams,
  IUserResponse,
  MongoUserSchema,
} from "../../../models/user";
import { hashPassword } from "../../../utils/hash-password";
import { ICreateUserRepository } from "./create-user.repository";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    const password = await hashPassword(params.password);
    const createdAt = moment().format("YYYY-MM-DDTHH:mm:ss");

    const { insertedId } = await MongoClient.db.collection("users").insertOne({
      name: params.name,
      email: params.email,
      password: password,
      createdAt: createdAt,
      updatedAt: null,
    });

    const user = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created");
    }

    return {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
