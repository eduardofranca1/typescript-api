import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IUpdateUserPasswordService } from "../../../services/user/update-user-password/update-user-password-impl.service";
import { RequestIdSchema, UpdatePasswordSchema } from "../../../schemas";

@injectable()
export class UpdateUserPasswordController {
  constructor(
    @inject("IUpdateUserPasswordService")
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
