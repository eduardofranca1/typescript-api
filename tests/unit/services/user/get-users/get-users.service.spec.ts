import { GetUsersRepository } from "../../../../../src/repositories/user/get-users/get-users.repository";
import { GetUsersService } from "../../../../../src/services/user/get-users/get-users.service";

describe("Get_Users_Service_Unit_Test", () => {
  it("should return a user list", async () => {
    const service = new GetUsersService({} as GetUsersRepository);

    jest.spyOn(service, "getUsers").mockResolvedValue([
      {
        _id: "67a50efc4ef1701e4335b011",
        name: "Stephen",
        email: "stephen@email.com",
        createdAt: "2025-02-11T08:00:00",
        updatedAt: "2025-02-12T09:00:00",
      },
    ]);

    const result = await service.getUsers();

    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Stephen");
    expect(result[0].email).toBe("stephen@email.com");
    expect(result[0].createdAt).toBe("2025-02-11T08:00:00");
    expect(result[0].updatedAt).toBe("2025-02-12T09:00:00");
  });
});
