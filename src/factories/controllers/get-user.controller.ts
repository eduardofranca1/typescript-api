import { GetUserController } from "../../controllers/user/get-user/get-user.controller";
import { GetUserRepository } from "../../repositories/user/get-user/get-user-impl.repository";
import { GetUserService } from "../../services/user/get-user/get-user-impl.service";

export const getUserControllerFactory = () => {
  const getUserRepository = new GetUserRepository();
  const getUserService = new GetUserService(getUserRepository);
  const getUserController = new GetUserController(getUserService);

  return {
    getUserController,
  };
};
