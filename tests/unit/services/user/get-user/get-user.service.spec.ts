import { GetUserRepository } from "../../../../../src/repositories/user/get-user/get-user-impl.repository";
import { GetUserService } from "../../../../../src/services/user/get-user/get-user-impl.service";

describe("Get_User_Service_Unit_Test", () => {
  it("should return a user response", async () => {
    const service = new GetUserService({} as GetUserRepository);

    jest.spyOn(service, "getUser").mockResolvedValue({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T09:00:00",
    });

    const result = await service.getUser("67a50efc4ef1701e4335b011");

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe("Stephen");
    expect(result.email).toBe("stephen@email.com");
    expect(result.createdAt).toBe("2025-02-11T08:00:00");
    expect(result.updatedAt).toBe("2025-02-12T09:00:00");
  });
});
