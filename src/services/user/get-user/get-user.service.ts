import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IUserResponse } from "../../../types";
import { IGetUserService } from "./get-user-impl.service";
import { IGetUserRepository } from "../../../repositories/user/get-user/get-user-impl.repository";

@injectable()
export class GetUserService implements IGetUserService {
  constructor(
    @inject("IGetUserRepository")
    private readonly getUserRepository: IGetUserRepository
  ) {}
  async getUser(id: string): Promise<IUserResponse> {
    const result = await this.getUserRepository.getUser(id);
    if (!result) throw new Error("User not found");
    return result;
  }
}
