import { DeleteUserController } from "../../controllers/user/delete-user/delete-user.controller";
import { DeleteUserRepository } from "../../repositories/user/delete-user/delete-user-impl.repository";
import { DeleteUserService } from "../../services/user/delete-user/delete-user-impl.service";

export const deleteUserControllerFactory = () => {
  const deleteUserRepository = new DeleteUserRepository();
  const deleteUserService = new DeleteUserService(deleteUserRepository);
  const deleteUserController = new DeleteUserController(deleteUserService);
  return {
    deleteUserController,
  };
};
