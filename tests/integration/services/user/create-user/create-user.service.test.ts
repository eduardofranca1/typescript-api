import { MongoClient } from "../../../../../src/database/mongo";
import { CreateUserRepository } from "../../../../../src/repositories/user/create-user/create-user.repository";
import { CreateUserService } from "../../../../../src/services/user/create-user/create-user.service";

describe("Create_User_Service", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should create a new user", async () => {
    const repository = new CreateUserRepository();
    const service = new CreateUserService(repository);

    const data = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const result = await service.createUser(data);

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe(data.name);
    expect(result.email).toBe(data.email);
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");
    expect(result.updatedAt).toBeNull();
  });
});
