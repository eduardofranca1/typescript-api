import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IGetUsersService } from "../../../services/user/get-users/get-users.service";

@injectable()
export class GetUsersController {
  constructor(
    @inject("IGetUsersService")
    private readonly getUsersService: IGetUsersService
  ) {}
  getUsers = async (_request: Request, response: Response) => {
    try {
      const result = await this.getUsersService.getUsers();
      response.status(200).json(result);
    } catch (error: any) {
      response.status(error.code).json(error.message);
    }
  };
}
