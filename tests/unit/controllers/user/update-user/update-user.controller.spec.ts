import "reflect-metadata";
import { Request, Response } from "express";
import { IUpdateUserService } from "../../../../../src/services/user/update-user/update-user-impl.service";
import { IUpdateUser, IUserResponse } from "../../../../../src/types";
import { CreateUserSchema, RequestIdSchema } from "../../../../../src/schemas";
import { UpdateUserController } from "../../../../../src/controllers/user/update-user/update-user.controller";

class UpdateUserServiceMock implements IUpdateUserService {
  async updateUser(id: string, params: IUpdateUser): Promise<IUserResponse> {
    return Promise.resolve({
      _id: id,
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });
  }
}

describe("Update_User_Controller_Unit_Test", () => {
  it("should return 200 status and user updated", async () => {
    const controller = new UpdateUserController(new UpdateUserServiceMock());

    const mockRequest = {
      params: { id: "67a50efc4ef1701e4335b011" },
      body: {
        name: "Stephen",
        email: "stephen@email.com",
      },
    } as unknown as Request<RequestIdSchema, {}, CreateUserSchema>;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await controller.updateUser(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });
  });
});
