import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ICreateUserParams, IUserResponse } from "../../../types";
import { ICreateUserService } from "./create-user-impl.service";
import { ICreateUserRepository } from "../../../repositories/user/create-user/create-user.repository";

@injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    @inject("ICreateUserRepository")
    private readonly createUserRepository: ICreateUserRepository
  ) {}

  async createUser(params: ICreateUserParams): Promise<IUserResponse> {
    const newUser = await this.createUserRepository.createUser(params);
    return newUser;
  }
}
