import { IUserResponse } from "../../../models/user";
import { IGetUserService } from "./get-user.service";
import { IGetUserRepository } from "../../../repositories/user/get-user/get-user.repository";
import { HttpException } from "../../../exceptions/exception";
import { HttpEnumStatusCode } from "../../../exceptions/http-status-code";

export class GetUserService implements IGetUserService {
  constructor(private readonly getUserRepository: IGetUserRepository) {}
  async getUser(id: string): Promise<IUserResponse> {
    const user = await this.getUserRepository.getUser(id);
    if (!user) {
      throw new HttpException("User not found", HttpEnumStatusCode.NOT_FOUND);
    }
    return user;
  }
}
