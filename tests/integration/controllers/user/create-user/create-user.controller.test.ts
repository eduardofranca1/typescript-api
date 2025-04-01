import request from "supertest";
import express from "express";
import { ICreateUserService } from "../../../../../src/services/user/create-user/create-user.service";
import { ICreateUserParams, IUserResponse } from "../../../../../src/types";
import { CreateUserController } from "../../../../../src/controllers/user/create-user/create-user.controller";

const app = express();
app.use(express.json());

class CreateUserServiceMock implements ICreateUserService {
  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    return Promise.resolve({
      _id: "67a50efc4ef1701e4335b011",
      name: params.name || "Dudu",
      email: params.email || "dudu@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  }
}

const controller = new CreateUserController(new CreateUserServiceMock());

app.post("/users", controller.createUser);

describe("Create_User_Controller_Integration_Test", () => {
  it("should test integration with Express server and router, returning 201 status and user response", async () => {
    const payload = {
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    };
    const response = await request(app).post("/users").send(payload);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      _id: "67a50efc4ef1701e4335b011",
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  });
});
