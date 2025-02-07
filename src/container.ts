import "reflect-metadata";
import { container } from "tsyringe";
import { ICreateUserRepository } from "./repositories/users/create-user/create-user-impl.repository";
import { CreateUserRepository } from "./repositories/users/create-user/create-user.repository";
import { ICreateUserService } from "./services/user/create-user/create-user-impl.service";
import { CreateUserService } from "./services/user/create-user/create-user.service";

container.register<ICreateUserRepository>("ICreateUserRepository", {
  useClass: CreateUserRepository,
});

container.register<ICreateUserService>("ICreateUserService", {
  useClass: CreateUserService,
});
