import "reflect-metadata";
import request from "supertest";
import express from "express";
import { IUpdateUserPasswordService } from "../../../../../src/services/user/update-user-password/update-user-password-impl.service";
import { IUpdateUserPassword } from "../../../../../src/types";
import { UpdateUserPasswordController } from "../../../../../src/controllers/user/update-user-password/update-user-password.controller";

const app = express();
app.use(express.json());

class UpdateUserPasswordService implements IUpdateUserPasswordService {
  async updatePassword(id: string, params: IUpdateUserPassword): Promise<void> {
    return Promise.resolve();
  }
}

const controller = new UpdateUserPasswordController(
  new UpdateUserPasswordService()
);

app.put("/users/update-password", controller.updatePassword);

describe("Update_User_Password_Controller_Integration_Test", () => {
  it("should test integration with Express server and router, and return 200 status", async () => {
    const payload = {
      oldPassword: "123456",
      newPassword: "654321",
      confirmNewPassword: "654321",
    };

    const response = await request(app)
      .put("/users/update-password?id=67a50efc4ef1701e4335b011")
      .send(payload);

    expect(response.status).toBe(200);
    expect(response.body).toEqual("OK");
  });
});
