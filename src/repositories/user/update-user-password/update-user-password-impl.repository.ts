import "reflect-metadata";
import { injectable } from "tsyringe";
import moment from "moment";
import { ObjectId } from "mongodb";
import { IUpdateUserPasswordRepository } from "./update-user-password.repository";
import { MongoClient } from "../../../database/mongo";
import { hashPassword } from "../../../utils/hash-password";

@injectable()
export class UpdateUserPasswordRepository
  implements IUpdateUserPasswordRepository
{
  async updateUserPassword(id: string, newPassword: string): Promise<void> {
    const updatedAt = moment().format("YYYY-MM-DDTHH:mm:ss");

    const newHashPassword = await hashPassword(newPassword);

    await MongoClient.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          updatedAt: updatedAt,
          password: newHashPassword,
        },
      }
    );
  }
}
