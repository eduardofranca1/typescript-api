import { Request, Response } from "express";
import { IUpdateUserPasswordService } from "../../services/user/update-user-password/update-user-password.service";
import { RequestIdSchema, UpdatePasswordSchema } from "../../schemas";

export class UpdateUserPasswordController {
  constructor(
    private readonly updateUserPasswordService: IUpdateUserPasswordService
  ) {}

  updatePassword = async (
    request: Request<RequestIdSchema, {}, UpdatePasswordSchema>,
    response: Response
  ) => {
    try {
      await this.updateUserPasswordService.updatePassword(request.params.id, {
        newPassword: request.body.newPassword,
        oldPassword: request.body.oldPassword,
      });
      response.status(200).json("OK");
    } catch (error: any) {
      response.status(error.code).json(error.message);
    }
  };
}
