import { CreateUserController } from "../../controllers/user/create-user.controller";
import { CreateUserRepository } from "../../repositories/user/create-user/create-user-impl.repository";
import { CreateUserService } from "../../services/user/create-user/create-user-impl.service";

export const createUserControllerFactory = () => {
  const createUserRepository = new CreateUserRepository();
  const createUserService = new CreateUserService(createUserRepository);
  const createUserController = new CreateUserController(createUserService);
  return {
    createUserController,
  };
};
