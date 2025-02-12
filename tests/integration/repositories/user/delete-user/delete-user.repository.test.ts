import { MongoClient } from "../../../../../src/database/mongo";
import { DeleteUserRepository } from "../../../../../src/repositories/user/delete-user/delete-user.repository";

describe("Delete_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should delete a user", async () => {
    const mockUser = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new DeleteUserRepository();

    await expect(
      repository.deleteUser(insertedId.toHexString())
    ).resolves.toBeUndefined();
  });
});
