import { Request, Response } from "express";
import { IDeleteUserService } from "../../../../../src/services/user/delete-user/delete-user.service";
import { RequestIdSchema } from "../../../../../src/schemas";
import { DeleteUserController } from "../../../../../src/controllers/user/delete-user.controller";

class DeleteUserServiceMock implements IDeleteUserService {
  async deleteUser(id: string): Promise<void> {
    return Promise.resolve();
  }
}

describe("Delete_User_Controller_Unit_Test", () => {
  it("should return 204 status", async () => {
    const controller = new DeleteUserController(new DeleteUserServiceMock());

    const mockRequest = {
      params: { id: "67a50efc4ef1701e4335b011" },
    } as unknown as Request<RequestIdSchema>;

    const mockResponse = {
      sendStatus: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await controller.deleteUser(mockRequest, mockResponse);

    expect(mockResponse.sendStatus).toHaveBeenCalledWith(204);
  });
});
