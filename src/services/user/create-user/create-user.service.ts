import { inject, injectable } from "tsyringe";
import { ICreateUserRepository } from "../../../repositories/users/create-user/create-user-impl.repository";
import { IUserCreatedResponse } from "../../../types";
import {
  ICreateUserParams,
  ICreateUserService,
} from "./create-user-impl.service";

@injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @inject("ICreateUserRepository")
    private readonly createUserRepository: ICreateUserRepository
  ) {}

  async createUser(params: ICreateUserParams): Promise<IUserCreatedResponse> {
    const newUser = await this.createUserRepository.createUser(params);
    return newUser;
  }
}
