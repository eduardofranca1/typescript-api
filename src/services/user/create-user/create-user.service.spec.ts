import { MongoClient } from "../../../database/mongo";
import { CreateUserRepository } from "../../../repositories/users/create-user/create-user.repository";
import { CreateUserService } from "./create-user.service";

describe("Create_User_Service", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
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
  });
});
