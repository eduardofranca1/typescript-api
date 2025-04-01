import { Request, Response } from "express";
import { IUpdateUserService } from "../../services/user/update-user/update-user.service";
import { RequestIdSchema, UpdateUserSchema } from "../../schemas";

export class UpdateUserController {
  constructor(private readonly updateUserService: IUpdateUserService) {}
  updateUser = async (
    request: Request<RequestIdSchema, {}, UpdateUserSchema>,
    response: Response
  ) => {
    try {
      const result = await this.updateUserService.updateUser(
        request.params.id,
        {
          name: request.body.name,
          email: request.body.email,
        }
      );
      response.status(200).json(result);
    } catch (error: any) {
      response.status(error.code).json(error.message);
    }
  };
}
