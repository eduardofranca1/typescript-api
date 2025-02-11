import moment from "moment";
import { MongoClient } from "../../../database/mongo";
import { UpdateUserRepository } from "./update-user.repository";

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
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
      createdAt: moment().format("YYYY-MM-DDTHH:mm:ss"),
    };

    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(mockUser);

    const repository = new UpdateUserRepository();
    const userUpdated = await repository.updateUser(insertedId.toHexString(), {
      name: "Eduardo",
      email: "emailupdated@email.com",
    });

    expect(userUpdated.name).toBe("Eduardo");
    expect(userUpdated.email).toBe("emailupdated@email.com");
  });
});
