import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "../controllers/user/create-user/create-user.controller";
import { validateRequest } from "../middlewares/validate-request";
import { createUserSchema } from "../schemas";

const router = Router();

const createUserController = container.resolve(CreateUserController);

router.post(
  "/",
  validateRequest(createUserSchema, "body"),
  createUserController.createUser
);

export default router;
