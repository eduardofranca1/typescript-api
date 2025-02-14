import moment from "moment";
import { MongoClient } from "../../../../../src/database/mongo";
import { UpdateUserPasswordRepository } from "../../../../../src/repositories/user/update-user-password/update-user-password.repository";

describe("Update_User_Password_Integration_Test", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("Should test MongoDB connection and update user password", async () => {
    const mockUser = {
      name: "Curry",
      email: "curry@email.com",
      password: "123456",
      createdAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new UpdateUserPasswordRepository();

    await expect(
      repository.updateUserPassword(insertedId.toHexString(), "654321")
    ).resolves.toBeUndefined();

    expect(
      await repository.updateUserPassword(insertedId.toHexString(), "654321")
    ).not.toBeInstanceOf(Error);
  });
});
