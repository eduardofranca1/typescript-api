import { GetUserRepository } from "../../../../../src/repositories/user/get-user/get-user-impl.repository";

describe("Get_User_Repository_Unit_Test", () => {
  it("should return a user got by id", async () => {
    const repository =
      new GetUserRepository() as jest.Mocked<GetUserRepository>;

    repository.getUser = jest.fn().mockResolvedValue({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });

    const result = await repository.getUser("user-id");

    expect(result).toHaveProperty("_id");
    expect(result!.name).toBe("Stephen");
    expect(result!.email).toBe("stephen@email.com");
    expect(result!.createdAt).toBe("2025-02-11T08:00:00");
    expect(result!.updatedAt).toBe("2025-02-12T08:00:00");
  });
});
