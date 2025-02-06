import { Router } from "express";
import { CreateUserRepository } from "../repositories/users/create-user/create-user.repository";
import { CreateUserService } from "../services/user/create-user/create-user.service";
import { CreateUserController } from "../controllers/user/create-user/create-user.controller";

const router = Router();

router.post("/", async (req, res) => {
  const createUserRepository = new CreateUserRepository();
  const createUserService = new CreateUserService(createUserRepository);
  const createUserController = new CreateUserController(createUserService);

  const result = await createUserController.createUser(req, res);

  res.status(201).json(result);
});

export default router;
