import request from "supertest";
import express from "express";
import { IUserResponse } from "../../../../../src/types";
import { IGetUserService } from "../../../../../src/services/user/get-user/get-user.service";
import { GetUserController } from "../../../../../src/controllers/user/get-user/get-user.controller";

const app = express();
app.use(express.json());

class GetUserServiceMock implements IGetUserService {
  async getUser(id: string): Promise<IUserResponse> {
    return Promise.resolve({
      _id: "67a50efc4ef1701e4335b011",
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  }
}

const controller = new GetUserController(new GetUserServiceMock());

app.get("/users/get-user", controller.getUser);

describe("Get_User_Controller_Integration_Test", () => {
  /**
   * Teste de integração, envolve o teste do servidor Express utilizando o Supertest
   * ✅ Se o servidor Express realmente processa a requisição.
   * ✅ Se o controller está funcionando dentro da estrutura do Express.
   * ✅ Se os middlewares do Express funcionam corretamente.
   * ✅ Se a API retorna o JSON esperado quando um cliente faz uma requisição real.
   */
  it("should test integration with Express server and router, returning 200 status", async () => {
    const response = await request(app).get(
      "/users/get-user?id=67a50efc4ef1701e4335b011"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      _id: "67a50efc4ef1701e4335b011",
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  });
});
