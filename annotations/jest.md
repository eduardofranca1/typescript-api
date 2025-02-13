- **jest.fn()**

  - O jest.fn() cria uma função mockada (ou seja, uma função que não faz nada, mas podemos controlar seu comportamento).

- **mockResolvedValue(...)**

  - Este método configura a função mockada (jest.fn()) para retornar uma promessa resolvida com um valor específico.

- **jest.Mocked<UpdateUserRepository>**

  - usamos o jest.Mocked para dizer ao Jest que queremos transformar a instância do UpdateUserRepository em um mock (uma versão simulada) da classe. Isso significa que todos os métodos da classe UpdateUserRepository (como updateUser) podem ser "sobrescritos" (mockados) com comportamentos específicos para os nossos testes.

```ts
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
```

```ts
describe("Update_User_Repository_Unit_Test", () => {
  it("should update a user", async () => {
    const repository =
      new UpdateUserRepository() as jest.Mocked<UpdateUserRepository>;

    repository.updateUser = jest.fn().mockResolvedValue({
      _id: "67a50efc4ef1701e4335b011",
      name: "Stephen",
      email: "stephen@email.com",
      createdAt: "2025-02-11T08:00:00",
      updatedAt: "2025-02-12T08:00:00",
    });

    const result = await repository.updateUser("user-id", {
      name: "Stephen",
      email: "stephen@email.com",
    });

    expect(result).toHaveProperty("_id");
    expect(result.name).toBe("Stephen");
    expect(result.email).toBe("stephen@email.com");
    expect(result.createdAt).toBe("2025-02-11T08:00:00");
    expect(result.updatedAt).toBe("2025-02-12T08:00:00");
  });
});
```
