import { Request, Response } from "express";
import { IGetUserService } from "../../services/user/get-user/get-user.service";
import { RequestIdSchema } from "../../schemas";

export class GetUserController {
  constructor(private readonly getUserService: IGetUserService) {}

  getUser = async (request: Request<RequestIdSchema>, response: Response) => {
    try {
      const result = await this.getUserService.getUser(request.params.id);
      response.status(200).json(result);
    } catch (error: any) {
      response.status(error.code).json(error.message);
    }
  };
}
