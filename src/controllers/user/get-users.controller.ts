import { IGetUsersService } from "../../services/user/get-users/get-users.service";
import { Controller, IHttpResponse } from "../controller";
import { IUserResponse } from "../../types";
import { ok, serverError } from "../../helpers/helpers";

export class GetUsersController implements Controller {
  constructor(private readonly getUsersService: IGetUsersService) {}
  async handle(): Promise<IHttpResponse<IUserResponse[] | string>> {
    try {
      const result = await this.getUsersService.getUsers();
      return ok<IUserResponse[]>(result);
    } catch (error) {
      return serverError();
    }
  }
}
