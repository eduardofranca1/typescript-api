import { Request, Response } from "express";
import { ICreateUserService } from "../../../services/user/create-user/create-user-impl.service";
import { CreateUserSchema } from "../../../schemas";

export class CreateUserController {
  constructor(private readonly createUserService: ICreateUserService) {}

  async createUser(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      const result = await this.createUserService.createUser({
        name,
        email,
        password,
      });
      return result;
      // response.status(201).json(result);
    } catch (error: any) {
      console.log("🚀 ~ CreateUserController ~ createUser ~ error:", error);
      response.status(error.code).json(error.message);
    }
  }
}
