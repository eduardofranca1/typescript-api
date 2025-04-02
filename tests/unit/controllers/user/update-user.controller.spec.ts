import { IUpdateUserService } from "../../../../src/services/user/update-user/update-user.service";
import { IUpdateUser, IUserResponse } from "../../../../src/models/user";
import { UpdateUserController } from "../../../../src/controllers/user/update-user.controller";
import { IHttpRequest } from "../../../../src/controllers/controller";

const makeUpdateHttpRequest = (
  id: string,
  params: any
): IHttpRequest<IUserResponse> => {
  return {
    params: { id },
    body: params,
  };
};

class UpdateUserServiceMock implements IUpdateUserService {
  async updateUser(id: string, params: IUpdateUser): Promise<IUserResponse> {
    return Promise.resolve({
      _id: id,
      name: params.name,
      email: params.email,
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });
  }
}

describe("Update_User_Controller_Unit_Test", () => {
  it("should return 200 status and user updated", async () => {
    const controller = new UpdateUserController(new UpdateUserServiceMock());

    const response = await controller.handle(
      makeUpdateHttpRequest("67a50efc4ef1701e4335b011", {
        name: "Stephen",
        email: "stephen@email.com",
      })
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });
  });
});
