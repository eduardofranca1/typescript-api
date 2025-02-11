import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "../controllers/user/create-user/create-user.controller";
import { validateRequest } from "../middlewares/validate-request";
import {
  createUserSchema,
  requestIdSchema,
  updateUserSchema,
} from "../schemas";
import { GetUsersController } from "../controllers/user/get-users/get-users.controller";
import { GetUserController } from "../controllers/user/get-user/get-user.controller";
import { DeleteUserController } from "../controllers/user/delete-user/delete-user.controller";
import { UpdateUserController } from "../controllers/user/update-user/update-user.controller";

const router = Router();

const createUserController = container.resolve(CreateUserController);
const getUsersController = container.resolve(GetUsersController);
const getUserController = container.resolve(GetUserController);
const updateUserController = container.resolve(UpdateUserController);
const deleteUserController = container.resolve(DeleteUserController);

router.post(
  "/",
  validateRequest(createUserSchema, "body"),
  createUserController.createUser
);

router.get("/", getUsersController.getUsers);

router.get(
  "/get-user/:id",
  validateRequest(requestIdSchema, "params"),
  getUserController.getUser
);

router.put(
  "/:id",
  validateRequest(requestIdSchema, "params"),
  validateRequest(updateUserSchema, "body"),
  updateUserController.updateUser
);

router.delete(
  "/:id",
  validateRequest(requestIdSchema, "params"),
  deleteUserController.deleteUser
);

export default router;
