import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserResponse } from "../../../types";
import { IGetUserService } from "./get-user-impl.service";
import { IGetUserRepository } from "../../../repositories/user/get-user/get-user.repository";
import { HttpException } from "../../../exceptions/exception";
import { HttpEnumStatusCode } from "../../../exceptions/http-status-code";

@injectable()
export class GetUserService implements IGetUserService {
  constructor(
    @inject("IGetUserRepository")
    private readonly getUserRepository: IGetUserRepository
  ) {}
  async getUser(id: string): Promise<IUserResponse> {
    const user = await this.getUserRepository.getUser(id);
    if (!user) {
      throw new HttpException("User not found", HttpEnumStatusCode.NOT_FOUND);
    }
    return user;
  }
}
