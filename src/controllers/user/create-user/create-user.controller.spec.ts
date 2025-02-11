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
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  }
}

const controller = new CreateUserController(new CreateUserServiceMock());

app.post("/users", controller.createUser);

describe("Create_User_Controller", () => {
  it("should return 201 status and user response", async () => {
    const payload = {
      _id: "user-id",
      name: "Dudu",
      email: "dudu@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    };
    const response = await request(app).post("/users").send(payload);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(payload);
  });
});
