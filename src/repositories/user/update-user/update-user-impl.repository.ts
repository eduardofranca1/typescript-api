import { ObjectId } from "mongodb";
import moment from "moment";
import {
  IUpdateUser,
  IUserResponse,
  MongoUserSchema,
} from "../../../models/user";
import { IUpdateUserRepository } from "./update-user.repository";
import { MongoClient } from "../../../database/mongo";

export class UpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: IUpdateUser): Promise<IUserResponse> {
    const updatedAt = moment().format("YYYY-MM-DDTHH:mm:ss");

    const dataToUpdate = {
      name: params.name,
      email: params.email,
      updatedAt,
    };

    await MongoClient.db
      .collection<MongoUserSchema>("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...dataToUpdate } });

    const newUser = await MongoClient.db
      .collection<MongoUserSchema>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!newUser) throw new Error("User not found");

    return {
      _id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
  }
}
