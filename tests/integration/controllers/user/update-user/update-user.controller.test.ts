import request from "supertest";
import express from "express";
import { IUpdateUserService } from "../../../../../src/services/user/update-user/update-user.service";
import { IUpdateUser, IUserResponse } from "../../../../../src/types";
import { UpdateUserController } from "../../../../../src/controllers/user/update-user/update-user.controller";

const app = express();
app.use(express.json());

class UpdateUserServiceMock implements IUpdateUserService {
  async updateUser(id: string, params: IUpdateUser): Promise<IUserResponse> {
    return Promise.resolve({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });
  }
}

const controller = new UpdateUserController(new UpdateUserServiceMock());

app.put("/users", controller.updateUser);

describe("Update_User_Controller_Integration_Test", () => {
  it("should test integration with Express server and router, return 200 status and user response", async () => {
    const payload = {
      name: "Stephen",
      email: "stephen@email.com",
    };

    const response = await request(app)
      .put("/users?id=67a50efc4ef1701e4335b011")
      .send(payload);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });
  });
});
