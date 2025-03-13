import { MongoClient } from "../../../../../src/database/mongo";
import { UpdateUserPasswordRepository } from "../../../../../src/repositories/user/update-user-password/update-user-password-impl.repository";
import { UpdateUserPasswordService } from "../../../../../src/services/user/update-user-password/update-user-password-impl.service";
import { hashPassword } from "../../../../../src/utils/hash-password";

describe("Update_User_Password_Service_Integration_Test", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should update user password and return void", async () => {
    const password = await hashPassword("123456");

    const { insertedId } = await MongoClient.db.collection("users").insertOne({
      name: "Curry",
      email: "curry@email.com",
      password: password,
      createdAt: "2025-02-11T08:00:00",
    });

    const repository = new UpdateUserPasswordRepository();
    const service = new UpdateUserPasswordService(repository);

    await expect(
      service.updatePassword(insertedId.toHexString(), {
        newPassword: "654321",
        oldPassword: "123456",
      })
    ).resolves.toBeUndefined();
  });

  it("should throw an exception if the user is not found", async () => {
    const wrongId = "67a50efc4ef1701e4335b011";

    const repository = new UpdateUserPasswordRepository();
    const service = new UpdateUserPasswordService(repository);

    await expect(
      service.updatePassword(wrongId, {
        newPassword: "654321",
        oldPassword: "234567",
      })
    ).rejects.toThrow("User not found");
  });

  it("should throw an exception if the passwords don't match", async () => {
    const password = await hashPassword("123456");

    const { insertedId } = await MongoClient.db.collection("users").insertOne({
      name: "Curry",
      email: "curry@email.com",
      password: password,
      createdAt: "2025-02-11T08:00:00",
    });

    const repository = new UpdateUserPasswordRepository();
    const service = new UpdateUserPasswordService(repository);

    await expect(
      service.updatePassword(insertedId.toHexString(), {
        newPassword: "654321",
        oldPassword: "234567",
      })
    ).rejects.toThrow("Passwords don't match");
  });
});
