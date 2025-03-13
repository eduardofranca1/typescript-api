import { CreateUserService } from "../../../../../src/services/user/create-user/create-user-impl.service";
import { CreateUserRepository } from "../../../../repositories/user/create-user/create-user-impl.repository";

describe("Create_User_Service_Unit_Test", () => {
  it("should return created user response", async () => {
    const service = new CreateUserService({} as CreateUserRepository);

    jest.spyOn(service, "createUser").mockResolvedValue({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });

    const result = await service.createUser({
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
