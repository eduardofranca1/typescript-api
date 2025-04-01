import { Request, Response } from "express";
import { IDeleteUserService } from "../../services/user/delete-user/delete-user.service";
import { RequestIdSchema } from "../../schemas";

export class DeleteUserController {
  constructor(private readonly deleteUserService: IDeleteUserService) {}
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
