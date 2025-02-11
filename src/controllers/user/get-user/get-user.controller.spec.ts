import "reflect-metadata";
import request from "supertest";
import express from "express";
import { IGetUserService } from "../../../services/user/get-user/get-user-impl.service";
import { IUserResponse } from "../../../types";
import { GetUserController } from "./get-user.controller";

const app = express();
app.use(express.json());

class GetUserServiceMock implements IGetUserService {
  async getUser(id: string): Promise<IUserResponse> {
    return Promise.resolve({
      _id: id,
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  }
}

const controller = new GetUserController(new GetUserServiceMock());

app.get("/users/get-user", controller.getUser);

describe("Get_User_Controller", () => {
  it("should return 200 status", async () => {
    // const controller = new GetUserController(new GetUserServiceMock());
    // tentar adicionar o id dentro de express.request
    // const teste  = await controller.getUser(express.request, express.response);

    const response = await request(app).get("/users/get-user?id=user-id");
    expect(response.status).toBe(200);
  });
});
