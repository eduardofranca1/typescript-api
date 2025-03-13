import "reflect-metadata";
import { Request, Response } from "express";
import { IGetUsersService } from "../../../../../src/services/user/get-users/get-users.service";
import { IUserResponse } from "../../../../../src/types";
import { GetUsersController } from "../../../../../src/controllers/user/get-users/get-users.controller";

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
    const mockRequest = {} as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const controller = new GetUsersController(new GetUsersServiceMock());

    await controller.getUsers(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith([
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
