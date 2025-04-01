import request from "supertest";
import express from "express";
import { IDeleteUserService } from "../../../../../src/services/user/delete-user/delete-user.service";
import { DeleteUserController } from "../../../../../src/controllers/user/delete-user.controller";

const app = express();
app.use(express.json());

class DeleteUserServiceMock implements IDeleteUserService {
  async deleteUser(id: string): Promise<void> {
    return Promise.resolve();
  }
}

const controller = new DeleteUserController(new DeleteUserServiceMock());

app.delete("/users", controller.deleteUser);

describe("Delete_User_Controller_Integration_Test", () => {
  it("should test integration with Express server and router, return 204 status no content", async () => {
    const response = await request(app).delete(
      "/users?id=67a50efc4ef1701e4335b011"
    );

    expect(response.status).toBe(204);
  });
});
