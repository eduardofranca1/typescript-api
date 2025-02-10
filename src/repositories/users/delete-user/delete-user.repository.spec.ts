import { MongoClient } from "../../../database/mongo";
import { DeleteUserRepository } from "./delete-user.repository";

describe("Delete_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
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

  it("should return an erro when the user is not found", async () => {
    const wrongId = "67a50efc4ef1701e4335b011";
    const repository = new DeleteUserRepository();
    await expect(repository.deleteUser(wrongId)).rejects.toThrow(
      "User not found"
    );
  });
});
