import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IGetUsersService } from "./get-users-impl.service";
import { IUserResponse } from "../../../types";
import { IGetUsersRepository } from "../../../repositories/user/get-users/get-users.repository";

@injectable()
export class GetUsersService implements IGetUsersService {
  constructor(
    @inject("IGetUsersRepository")
    private readonly getUsersRepository: IGetUsersRepository
  ) {}

  async getUsers(): Promise<IUserResponse[]> {
    return await this.getUsersRepository.getUsers();
  }
}
