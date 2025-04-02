import { IUpdateUserService } from "../../services/user/update-user/update-user.service";
import { Controller, IHttpRequest, IHttpResponse } from "../controller";
import { IUpdateUser, IUserResponse } from "../../models/user";
import { badRequest, error, ok } from "../../helpers/helpers";

export class UpdateUserController implements Controller {
  constructor(private readonly updateUserService: IUpdateUserService) {}

  async handle(
    request: IHttpRequest<IUpdateUser>
  ): Promise<IHttpResponse<IUserResponse | string>> {
    try {
      const { body } = request;
      if (!body) {
        return badRequest("Please specify the body");
      }

      const result = await this.updateUserService.updateUser(
        request.params.id,
        {
          name: body.name,
          email: body.email,
        }
      );

      return ok(result);
    } catch (err: any) {
      return error(err.code, err.message);
    }
  }
}
