import { MongoClient } from "../../../database/mongo";
import { GetUsersRepository } from "./get-users.repository";

describe("Get_Users_Repository", () => {
  beforeAll(async () => {
    await MongoClient.connect();
  });

  afterAll(async () => {
    await MongoClient.db.collection("users").deleteMany();
    await MongoClient.disconnect();
  });

  it("should return a user list", async () => {
    const mockUserOne = {
      name: "Dudu",
      email: "dudu@email.com",
      password: "123456",
    };

    const mockUserTwo = {
      name: "Du",
      email: "du@email.com",
      password: "123456",
    };

    await MongoClient.db.collection("users").insertOne(mockUserOne);
    await MongoClient.db.collection("users").insertOne(mockUserTwo);

    const repository = new GetUsersRepository();
    const result = await repository.getUsers();

    const firstUser = result.some((user) => user.email === mockUserOne.email);
    const secondUser = result.some((user) => user.email === mockUserTwo.email);

    expect(firstUser).toBeTruthy();
    expect(secondUser).toBeTruthy();
    expect(result.length).toBe(2);
  });
});
