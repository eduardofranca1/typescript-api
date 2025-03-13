import { UpdateUserRepository } from "../../../../../src/repositories/user/update-user/update-user-impl.repository";
import { UpdateUserService } from "../../../../../src/services/user/update-user/update-user-impl.service";

describe("Update_User_Service_Unit_Test", () => {
  it("should return a updated user response", async () => {
    const service = new UpdateUserService({} as UpdateUserRepository);

    jest.spyOn(service, "updateUser").mockResolvedValue({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T09:00:00",
    });

    const result = await service.updateUser("67a50efc4ef1701e4335b011", {
      name: "Stephen",
      email: "stephen@email.com",
    });

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe("Stephen");
    expect(result.email).toBe("stephen@email.com");
    expect(result.createdAt).toBe("2025-02-11T08:00:00");
    expect(result.updatedAt).toBe("2025-02-12T09:00:00");
  });
});
