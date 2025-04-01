import { ICreateUserParams, IUserResponse } from "../../../types";
import { ICreateUserService } from "./create-user.service";
import { ICreateUserRepository } from "../../../repositories/user/create-user/create-user.repository";

export class CreateUserService implements ICreateUserService {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    const newUser = await this.createUserRepository.createUser(params);
    return newUser;
  }
}
