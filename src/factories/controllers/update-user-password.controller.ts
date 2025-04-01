import { UpdateUserPasswordController } from "../../controllers/user/update-user-password/update-user-password.controller";
import { UpdateUserPasswordRepository } from "../../repositories/user/update-user-password/update-user-password-impl.repository";
import { UpdateUserPasswordService } from "../../services/user/update-user-password/update-user-password-impl.service";

export const updateUserPasswordControllerFactory = () => {
  const updateUserPasswordRepository = new UpdateUserPasswordRepository();
  const updateUserPasswordService = new UpdateUserPasswordService(
    updateUserPasswordRepository
  );
  const updateUserPasswordController = new UpdateUserPasswordController(
    updateUserPasswordService
  );
  return {
    updateUserPasswordController,
  };
};
