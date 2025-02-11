import moment from "moment";
import { MongoClient } from "../../../database/mongo";
import { DeleteUserRepository } from "../../../repositories/users/delete-user/delete-user.repository";
import { DeleteUserService } from "./delete-user.service";

describe("Delete_User_Service", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should delete a user", async () => {
    const mockUser = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
      createdAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new DeleteUserRepository();
    const service = new DeleteUserService(repository);

    await expect(
      service.deleteUser(insertedId.toHexString())
    ).resolves.toBeUndefined();
  });

  it("should return an error when the user is not found", async () => {
    const wrongId = "67a50efc4ef1701e4335b011";

    const repository = new DeleteUserRepository();
    const service = new DeleteUserService(repository);

    await expect(service.deleteUser(wrongId)).rejects.toThrow("User not found");
  });
});
