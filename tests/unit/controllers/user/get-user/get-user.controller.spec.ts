import "reflect-metadata";
import { Request, Response } from "express";
import { IGetUserService } from "../../../../../src/services/user/get-user/get-user-impl.service";
import { IUserResponse } from "../../../../../src/types";
import { GetUserController } from "../../../../../src/controllers/user/get-user/get-user.controller";
import { RequestIdSchema } from "../../../../../src/schemas";

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

describe("Get_User_Controller_Unit_Test", () => {
  /**
   * Teste unitário
   * ✅ Testa o comportamento interno do controller.
   * ✅ Se ele chama corretamente response.status(200) e response.json(...).
   * ✅ Não dependemos do Express nem do servidor rodando.
   */
  it("should return 200 status and the user response", async () => {
    const controller = new GetUserController(new GetUserServiceMock());

    const mockRequest = {
      params: { id: "67a50efc4ef1701e4335b011" },
    } as unknown as Request<RequestIdSchema>;

    // Criando um mock do objeto response
    // jest.fn() cria funções simuladas para rastrear chamadas e argumentos.
    // .mockReturnThis() faz com que status() retorne this, ou seja, o próprio objeto response, permitindo o encadeamento (response.status().json()).
    const mockResponse = {
      status: jest.fn().mockReturnThis(), // Retorna o próprio response para encadeamento
      json: jest.fn(),
    } as unknown as Response;

    await controller.getUser(mockRequest, mockResponse);

    // toHaveBeenCalledWith
    // ✔ Usado para verificar se uma função mockada foi chamada com um argumento específico.
    // Isso significa que mockResponse.status precisa ser uma função mockada pelo Jest, geralmente usando jest.fn() ou jest.spyOn().

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      _id: "67a50efc4ef1701e4335b011",
      name: "Curry",
      email: "curry@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: null,
    });
  });

  // it("should return 400 status if the user id is not in the request", async () => {
  //   const controller = new GetUserController(new GetUserServiceMock());

  //   const mockRequest = {} as unknown as Request<RequestIdSchema>;

  //   const mockResponse = {
  //     status: jest.fn().mockRejectedValue(404),
  //     json: jest.fn().mockRejectedValue(new Error("User not found")),
  //   } as unknown as Response;

  //   await controller.getUser(mockRequest, mockResponse);

  //   expect(mockResponse.status).toHaveBeenCalledWith(404);
  //   expect(mockResponse.json).toHaveBeenCalledWith("User");
  // });
});
