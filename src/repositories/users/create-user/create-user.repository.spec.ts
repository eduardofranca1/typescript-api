import { MongoClient } from "../../../database/mongo";
import { CreateUserRepository } from "./create-user.repository";

describe("Create_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.disconnect();
  });

  it("Should create a new user and save in the database.", async () => {
    const repository = new CreateUserRepository();

    const data = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const result = await repository.createUser(data);

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe(data.name);
    expect(result.email).toBe(data.email);
  });
});
