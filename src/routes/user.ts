import { Router } from "express";
import { extractZodErrors } from "../middlewares/validate-request";
import {
  createUserSchema,
  requestIdSchema,
  updatePasswordSchema,
  updateUserSchema,
} from "../schemas";
import { createUserControllerFactory } from "../factories/controllers/create-user.controller";
import { getUserControllerFactory } from "../factories/controllers/get-user.controller";
import { getUsersControllerFactory } from "../factories/controllers/get-users.controller";
import { deleteUserControllerFactory } from "../factories/controllers/delete-user.controller";
import { updateUserControllerFactory } from "../factories/controllers/update-user.controller";
import { updateUserPasswordControllerFactory } from "../factories/controllers/update-user-password.controller";

const router = Router();

const { createUserController } = createUserControllerFactory();
const { getUsersController } = getUsersControllerFactory();
const { getUserController } = getUserControllerFactory();
const { updateUserController } = updateUserControllerFactory();
const { updateUserPasswordController } = updateUserPasswordControllerFactory();
const { deleteUserController } = deleteUserControllerFactory();

router.post(
  "/",
  extractZodErrors(createUserSchema, "body"),
  async (req, res) => {
    const response = await createUserController.handle({
      body: req.body,
    });
    res.status(response.statusCode).json(response.body);
  }
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
