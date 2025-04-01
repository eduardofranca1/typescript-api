import { Request, Response } from "express";
import { ICreateUserService } from "../../../../../src/services/user/create-user/create-user.service";
import { ICreateUserParams, IUserResponse } from "../../../../../src/types";
import { CreateUserSchema } from "../../../../../src/schemas";
import { CreateUserController } from "../../../../../src/controllers/user/create-user/create-user.controller";

class CreateUserServiceMock implements ICreateUserService {
  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    return Promise.resolve({
      _id: "67a50efc4ef1701e4335b011",
      name: params.name,
      email: params.email,
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  }
}

describe("Create_User_Controller_Unit_Test", () => {
  it("should return 201 status and the user response", async () => {
    const mockRequest = {
      body: {
        name: "curry",
        email: "curry@email.com",
        password: "123456",
        confirmPassword: "123456",
      },
    } as unknown as Request<{}, {}, CreateUserSchema>;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const controller = new CreateUserController(new CreateUserServiceMock());

    await controller.createUser(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({
      _id: "67a50efc4ef1701e4335b011",
      name: "curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  });
});
