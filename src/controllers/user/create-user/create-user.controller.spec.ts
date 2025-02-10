import "reflect-metadata";
import request from "supertest";
import express from "express";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../../repositories/users/create-user/create-user-impl.repository";
import { IUserResponse } from "../../../types";
import { CreateUserController } from "./create-user.controller";

const app = express();
app.use(express.json());

class CreateUserServiceMock implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    return Promise.resolve({
      _id: "user-id",
      name: params.name || "Dudu",
      email: params.email || "dudu@email.com",
    });
  }
}

const controller = new CreateUserController(new CreateUserServiceMock());

app.post("/users", controller.createUser);

describe("Create_User_Controller", () => {
  it("should return 201 status and user response", async () => {
    const mockUserResponse = {
      _id: "user-id",
      name: "Dudu",
      email: "dudu@email.com",
    };
    const response = await request(app).post("/users").send(mockUserResponse);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockUserResponse);
  });
});
