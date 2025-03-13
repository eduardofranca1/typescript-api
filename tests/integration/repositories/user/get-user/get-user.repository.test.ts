import { MongoClient } from "../../../../../src/database/mongo";
import { GetUserRepository } from "../../../../../src/repositories/user/get-user/get-user-impl.repository";

describe("Get_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should return a user", async () => {
    const mockUser = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new GetUserRepository();
    const result = await repository.getUser(insertedId.toHexString());
    expect(result).toHaveProperty("_id");
    expect(result!.name).toBe(mockUser.name);
    expect(result!.email).toBe(mockUser.email);
  });
});
