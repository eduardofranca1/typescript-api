import "reflect-metadata";
import { injectable } from "tsyringe";
import { ObjectId } from "mongodb";
import moment from "moment";
import { IUpdateUser, IUserResponse, MongoUserSchema } from "../../../types";
import { IUpdateUserRepository } from "./update-user-impl.repository";
import { MongoClient } from "../../../database/mongo";

@injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: IUpdateUser): Promise<IUserResponse> {
    const user = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) throw new Error("User not found");

    const updatedAt = moment().format("YYYY-MM-DDTHH:mm:ss");

    const data = {
      name: params.name,
      email: params.email,
      updatedAt,
    };

    await MongoClient.db
      .collection<MongoUserSchema>("users")
      .updateOne({ _id: user._id }, { $set: { data } });

    const newUser = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: user._id });

    if (!newUser) throw new Error("User not found");

    return {
      _id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
    };
  }
}
