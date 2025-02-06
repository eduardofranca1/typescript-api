import { ICreateUserRepository } from "../../../repositories/users/create-user/create-user-impl.repository";
import { IUserResponse } from "../../../types";
import {
  ICreateUserParams,
  ICreateUserService,
} from "./create-user-impl.service";

export class CreateUserService implements ICreateUserService {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    const newUser = await this.createUserRepository.createUser(params);
    return newUser;
  }
}
