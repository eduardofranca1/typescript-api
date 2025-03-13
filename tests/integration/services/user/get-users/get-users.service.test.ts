import { MongoClient } from "../../../../../src/database/mongo";
import { GetUsersRepository } from "../../../../../src/repositories/user/get-users/get-users-impl.repository";
import { GetUsersService } from "../../../../../src/services/user/get-users/get-users.service";

describe("Get_Users_Service", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should return a user list", async () => {
    await MongoClient.db.collection("users").insertOne({
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });

    const repository = new GetUsersRepository();
    const service = new GetUsersService(repository);

    const result = await service.getUsers();

    const user = result.some((user) => user.email === "curry@email.com");

    expect(result.length).toBe(1);
    expect(user).toBeTruthy();
    expect(result[0]).toHaveProperty("_id");
    expect(result[0].name).toBe("Curry");
    expect(result[0].email).toBe("curry@email.com");
    expect(result[0]).toHaveProperty("createdAt");
    expect(result[0]).toHaveProperty("updatedAt");
    expect(result[0].updatedAt).toBeNull();
  });
});
