import { ICreateUserService } from "../../services/user/create-user/create-user.service";
import { Controller, IHttpRequest, IHttpResponse } from "../controller";
import { ICreateUserParams, IUserResponse } from "../../types";
import { badRequest, created, serverError } from "../../helpers/helpers";

export class CreateUserController implements Controller {
  constructor(private readonly createUserService: ICreateUserService) {}
  async handle(
    request: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<IUserResponse | string>> {
    try {
      const { body } = request;

      if (!body) {
        return badRequest("Please specify the body");
      }

      const result = await this.createUserService.createUser(body);

      return created<IUserResponse>(result);
    } catch (error) {
      return serverError();
    }
  }
}
