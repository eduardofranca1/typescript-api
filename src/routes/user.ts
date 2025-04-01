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

router.get("/", async (req, res) => {
  const response = await getUsersController.handle();
  res.status(response.statusCode).json(response.body);
});

router.get(
  "/get-user/:id",
  extractZodErrors(requestIdSchema, "params"),
  async (req, res) => {
    const response = await getUserController.handle({ params: req.params });
    res.status(response.statusCode).json(response.body);
  }
);

router.put(
  "/:id",
  extractZodErrors(requestIdSchema, "params"),
  extractZodErrors(updateUserSchema, "body"),
  async (req, res) => {
    const response = await updateUserController.handle({
      params: req.params,
      body: req.body,
    });
    res.status(response.statusCode).json(response.body);
  }
);

router.put(
  "/update-password/:id",
  extractZodErrors(requestIdSchema, "params"),
  extractZodErrors(updatePasswordSchema, "body"),
  async (req, res) => {
    const response = await updateUserPasswordController.handle({
      params: req.params,
      body: req.body,
    });
    res.status(response.statusCode).json(response.body);
  }
);

router.delete(
  "/:id",
  extractZodErrors(requestIdSchema, "params"),
  async (req, res) => {
    const response = await deleteUserController.handle({ params: req.params });
    res.status(response.statusCode).json(response.body);
  }
);

export default router;
