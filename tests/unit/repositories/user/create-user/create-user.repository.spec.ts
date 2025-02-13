import { CreateUserRepository } from "../../../../../src/repositories/user/create-user/create-user.repository";

describe("Create_User_Repository_Unit_Test", () => {
  it("should return user created response", async () => {
    const repository =
      new CreateUserRepository() as jest.Mocked<CreateUserRepository>;

    repository.createUser = jest.fn().mockReturnValue({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });

    const result = await repository.createUser({
      name: "Stephen",
      email: "stephen@email.com",
      password: "123456",
    });

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe("Stephen");
    expect(result.email).toBe("stephen@email.com");
    expect(result.createdAt).toBe("2025-02-11T08:00:00");
    expect(result.updatedAt).toBeNull();
  });
});
