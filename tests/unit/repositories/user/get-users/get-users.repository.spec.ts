import { GetUsersRepository } from "../../../../../src/repositories/user/get-users/get-users-impl.repository";

describe("Get_Users_Repository_Unit_Test", () => {
  it("should return a user list", async () => {
    const repository =
      new GetUsersRepository() as jest.Mocked<GetUsersRepository>;

    repository.getUsers = jest.fn().mockResolvedValue([
      {
        _id: "67a50efc4ef1701e4335b011",
        name: "Stephen",
        email: "stephen@email.com",
        createdAt: "2025-02-11T08:00:00",
        updatedAt: "2025-02-12T08:00:00",
      },
    ]);

    const result = await repository.getUsers();

    expect(result.length).toBe(1);
  });
});
