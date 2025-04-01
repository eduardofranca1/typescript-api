import { GetUsersController } from "../../controllers/user/get-users.controller";
import { GetUsersRepository } from "../../repositories/user/get-users/get-users-impl.repository";
import { GetUsersService } from "../../services/user/get-users/get-users-impl.service";

export const getUsersControllerFactory = () => {
  const getUsersRepository = new GetUsersRepository();
  const getUsersService = new GetUsersService(getUsersRepository);
  const getUsersController = new GetUsersController(getUsersService);
  return {
    getUsersController,
  };
};
