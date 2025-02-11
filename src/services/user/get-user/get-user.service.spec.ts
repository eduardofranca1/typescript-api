import { MongoClient } from "../../../database/mongo";
import { GetUserRepository } from "../../../repositories/users/get-user/get-user.repository";
import { GetUserService } from "./get-user.service";

describe("Get_User_Service", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should return a user got by id", async () => {
    const { insertedId } = await MongoClient.db.collection("users").insertOne({
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });

    const repository = new GetUserRepository();
    const service = new GetUserService(repository);
    const result = await service.getUser(insertedId.toHexString());

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe("Curry");
    expect(result.email).toBe("curry@email.com");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("updatedAt");
    expect(result.updatedAt).toBeNull();
  });
});
