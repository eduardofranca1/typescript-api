import { IDeleteUserService } from "../../../../src/services/user/delete-user/delete-user.service";
import { DeleteUserController } from "../../../../src/controllers/user/delete-user.controller";
import { IHttpRequest } from "../../../../src/controllers/controller";

class DeleteUserServiceMock implements IDeleteUserService {
  async deleteUser(id: string): Promise<void> {
    return Promise.resolve();
  }
}

describe("Delete_User_Controller_Unit_Test", () => {
  it("should return 204 status", async () => {
    const makeHttpRequest = (id: string): IHttpRequest<{ id: string }> => ({
      params: { id },
    });
    const controller = new DeleteUserController(new DeleteUserServiceMock());

    const response = await controller.handle(makeHttpRequest("user-id"));

    expect(response.statusCode).toBe(204);
  });
});
