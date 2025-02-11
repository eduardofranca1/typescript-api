import { MongoClient } from "../../../database/mongo";
import { UpdateUserRepository } from "../../../repositories/users/update-user/update-user.repository";
import { UpdateUserService } from "./update-user.service";

describe("Update_User_Service", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should update a user", async () => {
    const user = {
      name: "Curry",
      email: "curry@email.com",
      password: "123456",
      createdAt: "2025-02-11T08:00:00",
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(user);

    const repository = new UpdateUserRepository();
    const service = new UpdateUserService(repository);

    const result = await service.updateUser(insertedId.toHexString(), {
      name: "Stephen",
      email: "stephen@email.com",
    });

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe("Stephen");
    expect(result.email).toBe("stephen@email.com");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");
  });

  it("should return an erro when the user is not found", async () => {
    const wrongId = "67a50efc4ef1701e4335b011";
    const repository = new UpdateUserRepository();
    const service = new UpdateUserService(repository);
    await expect(
      service.updateUser(wrongId, {
        name: "Curry",
        email: "stephen@email.com",
      })
    ).rejects.toThrow("User not found");
  });
});
