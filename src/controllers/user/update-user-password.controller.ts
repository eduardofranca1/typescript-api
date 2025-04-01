import { IUpdateUserPasswordService } from "../../services/user/update-user-password/update-user-password.service";
import { Controller, IHttpRequest, IHttpResponse } from "../controller";
import { IUpdateUserPassword } from "../../models/user";
import { badRequest, error, ok } from "../../helpers/helpers";

export class UpdateUserPasswordController implements Controller {
  constructor(
    private readonly updateUserPasswordService: IUpdateUserPasswordService
  ) {}

  async handle(
    request: IHttpRequest<IUpdateUserPassword>
  ): Promise<IHttpResponse<string>> {
    try {
      const { body } = request;
      if (!body) {
        return badRequest("Please specify the body");
      }
      await this.updateUserPasswordService.updatePassword(request.params.id, {
        newPassword: body.newPassword,
        oldPassword: body.oldPassword,
      });
      return ok("ok");
    } catch (err: any) {
      return error(err.code, err.message);
    }
  }
}
