import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IDeleteUserService } from "../../../services/user/delete-user/delete-user.service";
import { RequestIdSchema } from "../../../schemas";

@injectable()
export class DeleteUserController {
  constructor(
    @inject("IDeleteUserService")
    private readonly deleteUserService: IDeleteUserService
  ) {}
  deleteUser = async (
    request: Request<RequestIdSchema>,
    response: Response
  ) => {
    try {
      await this.deleteUserService.deleteUser(request.params.id);
      response.sendStatus(204);
    } catch (error: any) {
      response.status(error.code).json(error.message);
    }
  };
}
