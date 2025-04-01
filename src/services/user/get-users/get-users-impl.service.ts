import { IGetUsersService } from "./get-users.service";
import { IUserResponse } from "../../../models/user";
import { IGetUsersRepository } from "../../../repositories/user/get-users/get-users.repository";

export class GetUsersService implements IGetUsersService {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async getUsers(): Promise<IUserResponse[]> {
    return await this.getUsersRepository.getUsers();
  }
}
