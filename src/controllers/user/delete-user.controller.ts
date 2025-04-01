import { IDeleteUserService } from "../../services/user/delete-user/delete-user.service";
import { Controller, IHttpRequest, IHttpResponse } from "../controller";
import { error, noCotent } from "../../helpers/helpers";

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUserService: IDeleteUserService) {}
  async handle(
    request: IHttpRequest<{ id: string }>
  ): Promise<IHttpResponse<any>> {
    try {
      await this.deleteUserService.deleteUser(request.params.id);
      return noCotent();
    } catch (err: any) {
      return error(err.code, err.message);
    }
  }
}
