import request from "supertest";
import express from "express";
import { IGetUsersService } from "../../../../../src/services/user/get-users/get-users.service";
import { IUserResponse } from "../../../../../src/types";
import { GetUsersController } from "../../../../../src/controllers/user/get-users.controller";

const app = express();
app.use(express.json());

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

const controller = new GetUsersController(new GetUsersServiceMock());

app.get("/users", controller.getUsers);

describe("Get_Users_Controller_Integration_Test", () => {
  it("should test integration with express server, router and return 200 status and a user list", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
    expect(response.body.length).toBe(1);
  });
});
