import "reflect-metadata";
import { injectable } from "tsyringe";
import moment from "moment";
import { MongoClient } from "../../../database/mongo";
import { IUserCreatedResponse, MongoUserSchema } from "../../../types";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "./create-user-impl.repository";
import { hashPassword } from "../../../utils/hash-password";

@injectable()
export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUserCreatedResponse> {
    const password = await hashPassword(params.password);
    const createdAt = moment().format("YYYY-MM-DDTHH:mm:ss");

    const { insertedId } = await MongoClient.db.collection("users").insertOne({
      name: params.name,
      email: params.email,
      password: password,
      disabled: false,
      createdAt: createdAt,
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
    };
  }
}
