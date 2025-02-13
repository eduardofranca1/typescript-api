import { DeleteUserRepository } from "../../../../../src/repositories/user/delete-user/delete-user.repository";

describe("Delete_User_Repository_Unit_Test", () => {
  it("should return void", async () => {
    const repository =
      new DeleteUserRepository() as jest.Mocked<DeleteUserRepository>;

    repository.deleteUser = jest.fn().mockResolvedValue(Promise.resolve());

    await expect(repository.deleteUser("user-id")).resolves.toBeUndefined();
  });
});
