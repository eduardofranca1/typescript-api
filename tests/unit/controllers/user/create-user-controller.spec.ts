import { ICreateUserService } from "../../../../src/services/user/create-user/create-user.service";
import { ICreateUserParams, IUserResponse } from "../../../../src/types";
import { CreateUserController } from "../../../../src/controllers/user/create-user.controller";

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
  it("should return 201 status code and the user response", async () => {
    const controller = new CreateUserController(new CreateUserServiceMock());
    const mockRequest = {
      body: {
        name: "curry",
        email: "curry@email.com",
        password: "123456",
        confirmPassword: "123456",
      },
    };

    const response = await controller.handle(mockRequest);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      _id: "67a50efc4ef1701e4335b011",
      name: "curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  });
});
