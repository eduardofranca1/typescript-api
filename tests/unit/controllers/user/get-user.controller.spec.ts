import { IGetUserService } from "../../../../src/services/user/get-user/get-user.service";
import { IUserResponse } from "../../../../src/models/user";
import { GetUserController } from "../../../../src/controllers/user/get-user.controller";
import { IHttpRequest } from "../../../controllers/controller";

class GetUserServiceMock implements IGetUserService {
  async getUser(id: string): Promise<IUserResponse> {
    return Promise.resolve({
      _id: id,
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  }
}

describe("Get_User_Controller_Unit_Test", () => {
  it("should return 200 status code and the user response", async () => {
    const makeHttpRequest = (id: string): IHttpRequest<{ id: string }> => ({
      params: { id },
    });

    const controller = new GetUserController(new GetUserServiceMock());

    const response = await controller.handle(makeHttpRequest("user-id"));

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      _id: "user-id",
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  });
});
