import { IGetUserService } from "../../services/user/get-user/get-user.service";
import { Controller, IHttpRequest, IHttpResponse } from "../controller";
import { IUserResponse } from "../../models/user";
import { ok, error } from "../../helpers/helpers";

export class GetUserController implements Controller {
  constructor(private readonly getUserService: IGetUserService) {}

  async handle(
    request: IHttpRequest<{ id: string }>
  ): Promise<IHttpResponse<IUserResponse | string>> {
    try {
      const response = await this.getUserService.getUser(request.params.id);
      return ok<IUserResponse>(response);
    } catch (err: any) {
      return error(err.code, err.message);
    }
  }
}
