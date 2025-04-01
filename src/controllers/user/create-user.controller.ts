import { Request, Response } from "express";
import { ICreateUserService } from "../../services/user/create-user/create-user.service";
import { CreateUserSchema } from "../../schemas";

export class CreateUserController {
  constructor(private readonly createUserService: ICreateUserService) {}

  createUser = async (
    request: Request<{}, {}, CreateUserSchema>,
    response: Response
  ) => {
    try {
      const { name, email, password } = request.body;
      const result = await this.createUserService.createUser({
        name,
        email,
        password,
      });
      response.status(201).json(result);
    } catch (error: any) {
      response.status(error.code).json(error.message);
    }
  };
}
