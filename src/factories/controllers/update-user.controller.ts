import { UpdateUserController } from "../../controllers/user/update-user.controller";
import { UpdateUserRepository } from "../../repositories/user/update-user/update-user-impl.repository";
import { UpdateUserService } from "../../services/user/update-user/update-user-impl.service";

export const updateUserControllerFactory = () => {
  const updateUserRepository = new UpdateUserRepository();
  const updateUserService = new UpdateUserService(updateUserRepository);
  const updateUserController = new UpdateUserController(updateUserService);
  return {
    updateUserController,
  };
};
