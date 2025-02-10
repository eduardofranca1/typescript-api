import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { ICreateUserService } from "../../../services/user/create-user/create-user-impl.service";
import { CreateUserSchema } from "../../../schemas";

@injectable()
export class CreateUserController {
  constructor(
    @inject("ICreateUserService")
    private readonly createUserService: ICreateUserService
  ) {}

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
