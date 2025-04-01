import { IGetUsersService } from "../../../../src/services/user/get-users/get-users.service";
import { IUserResponse } from "../../../../src/types";
import { GetUsersController } from "../../../../src/controllers/user/get-users.controller";

class GetUsersServiceMock implements IGetUsersService {
  async getUsers(): Promise<IUserResponse[]> {
    return Promise.resolve([
      {
        _id: "user-id",
        name: "Curry",
        email: "curry@email.com",
        createdAt: "2025-02-11T08:00:00",
        updatedAt: null,
      },
    ]);
  }
}

describe("Get_Users_Controller_Unit_Test", () => {
  it("should return status 200 and a user list", async () => {
    const controller = new GetUsersController(new GetUsersServiceMock());

    const response = await controller.handle();

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      {
        _id: "user-id",
        name: "Curry",
        email: "curry@email.com",
        createdAt: "2025-02-11T08:00:00",
        updatedAt: null,
      },
    ]);
  });
});
