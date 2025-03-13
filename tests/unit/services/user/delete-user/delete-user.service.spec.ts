import { DeleteUserRepository } from "../../../../../src/repositories/user/delete-user/delete-user-impl.repository";
import { DeleteUserService } from "../../../../../src/services/user/delete-user/delete-user.service";

describe("Delete_User_Service_Unit_Test", () => {
  it("should return void", async () => {
    const service = new DeleteUserService({} as DeleteUserRepository);

    const spy = jest.spyOn(service, "deleteUser").mockResolvedValue(undefined);

    await expect(service.deleteUser("user-id")).resolves.toBeUndefined();

    expect(spy).toHaveBeenCalledWith("user-id");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
