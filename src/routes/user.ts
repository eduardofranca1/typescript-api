import { Router } from "express";
import { container } from "tsyringe";
import { extractZodErrors } from "../middlewares/validate-request";
import {
  createUserSchema,
  requestIdSchema,
  updatePasswordSchema,
  updateUserSchema,
} from "../schemas";
import { UpdateUserController } from "../controllers/user/update-user/update-user.controller";
import { UpdateUserPasswordController } from "../controllers/user/update-user-password/update-user-password.controller";
import { createUserControllerFactory } from "../factories/controllers/create-user.controller";
import { getUserControllerFactory } from "../factories/controllers/get-user.controller";
import { getUsersControllerFactory } from "../factories/controllers/get-users.controller";
import { deleteUserControllerFactory } from "../factories/controllers/delete-user.controller";

const router = Router();

const { createUserController } = createUserControllerFactory();
const { getUsersController } = getUsersControllerFactory();
const { getUserController } = getUserControllerFactory();
const updateUserController = container.resolve(UpdateUserController);
const updateUserPasswordController = container.resolve(
  UpdateUserPasswordController
);
const { deleteUserController } = deleteUserControllerFactory();

router.post(
  "/",
  extractZodErrors(createUserSchema, "body"),
  createUserController.createUser
);

router.get("/", getUsersController.getUsers);

router.get(
  "/get-user/:id",
  extractZodErrors(requestIdSchema, "params"),
  getUserController.getUser
);

router.put(
  "/:id",
  extractZodErrors(requestIdSchema, "params"),
  extractZodErrors(updateUserSchema, "body"),
  updateUserController.updateUser
);

router.put(
  "/update-password/:id",
  extractZodErrors(requestIdSchema, "params"),
  extractZodErrors(updatePasswordSchema, "body"),
  updateUserPasswordController.updatePassword
);

router.delete(
  "/:id",
  extractZodErrors(requestIdSchema, "params"),
  deleteUserController.deleteUser
);

export default router;
