import { MongoClient } from "../../../database/mongo";
import { UpdateUserRepository } from "./update-user.repository";

describe("Update_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should update a user", async () => {
    const mockUser = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new UpdateUserRepository();
    const userUpdated = await repository.updateUser(insertedId.toHexString(), {
      name: "Eduardo",
      email: "emailupdated@email.com",
    });

    expect(mockUser.name).toBe(userUpdated.name);
    expect(mockUser.email).toBe(userUpdated.email);
  });

  it("should return an erro when the user is not found", async () => {
    const wrongId = "67a50efc4ef1701e4335b011";
    const repository = new UpdateUserRepository();
    await expect(
      repository.updateUser(wrongId, {
        name: "Eduardo",
        email: "emailupdated@email.com",
      })
    ).rejects.toThrow("User not found");
  });
});
