import { MongoClient } from "../../../../../src/database/mongo";
import { CreateUserRepository } from "../../../../../src/repositories/user/create-user/create-user-impl.repository";

describe("Create_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("Should create a new user and save in the database.", async () => {
    const repository = new CreateUserRepository();
    const mockUser = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const result = await repository.createUser(mockUser);

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe(mockUser.name);
    expect(result.email).toBe(mockUser.email);
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");
  });
});
