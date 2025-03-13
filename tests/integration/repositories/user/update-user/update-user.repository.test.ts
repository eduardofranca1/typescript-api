import moment from "moment";
import { MongoClient } from "../../../../../src/database/mongo";
import { UpdateUserRepository } from "../../../../../src/repositories/user/update-user/update-user-impl.repository";

describe("Update_User_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should update a user", async () => {
    const mockUser = {
      name: "Curry",
      email: "curry@email.com",
      password: "123456",
      createdAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new UpdateUserRepository();
    const userUpdated = await repository.updateUser(insertedId.toHexString(), {
      name: "Stephen",
      email: "stephen@email.com",
    });

    expect(userUpdated.name).toBe("Stephen");
    expect(userUpdated.email).toBe("stephen@email.com");
  });
});
