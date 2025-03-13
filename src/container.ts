import "reflect-metadata";
import { container } from "tsyringe";
import { IUpdateUserPasswordService } from "./services/user/update-user-password/update-user-password-impl.service";
import { UpdateUserPasswordService } from "./services/user/update-user-password/update-user-password.service";
import { ICreateUserRepository } from "./repositories/user/create-user/create-user.repository";
import { CreateUserRepository } from "./repositories/user/create-user/create-user-impl.repository";
import { IDeleteUserRepository } from "./repositories/user/delete-user/delete-user.repository";
import { DeleteUserRepository } from "./repositories/user/delete-user/delete-user-impl.repository";
import { IGetUserRepository } from "./repositories/user/get-user/get-user.repository";
import { GetUserRepository } from "./repositories/user/get-user/get-user-impl.repository";
import { IGetUsersRepository } from "./repositories/user/get-users/get-users.repository";
import { GetUsersRepository } from "./repositories/user/get-users/get-users-impl.repository";
import { IUpdateUserRepository } from "./repositories/user/update-user/update-user.repository";
import { UpdateUserRepository } from "./repositories/user/update-user/update-user-impl.repository";
import { IUpdateUserPasswordRepository } from "./repositories/user/update-user-password/update-user-password.repository";
import { UpdateUserPasswordRepository } from "./repositories/user/update-user-password/update-user-password-impl.repository";
import { ICreateUserService } from "./services/user/create-user/create-user.service";
import { CreateUserService } from "./services/user/create-user/create-user-impl.service";
import { IDeleteUserService } from "./services/user/delete-user/delete-user.service";
import { DeleteUserService } from "./services/user/delete-user/delete-user-impl.service";
import { IGetUserService } from "./services/user/get-user/get-user.service";
import { GetUserService } from "./services/user/get-user/get-user-impl.service";
import { IGetUsersService } from "./services/user/get-users/get-users.service";
import { GetUsersService } from "./services/user/get-users/get-users-impl.service";
import { IUpdateUserService } from "./services/user/update-user/update-user.service";
import { UpdateUserService } from "./services/user/update-user/update-user-impl.service";

container.register<ICreateUserRepository>("ICreateUserRepository", {
  useClass: CreateUserRepository,
});

container.register<ICreateUserService>("ICreateUserService", {
  useClass: CreateUserService,
});

container.register<IGetUsersRepository>("IGetUsersRepository", {
  useClass: GetUsersRepository,
});

container.register<IGetUsersService>("IGetUsersService", {
  useClass: GetUsersService,
});

container.register<IGetUserRepository>("IGetUserRepository", {
  useClass: GetUserRepository,
});

container.register<IGetUserService>("IGetUserService", {
  useClass: GetUserService,
});

container.register<IUpdateUserRepository>("IUpdateUserRepository", {
  useClass: UpdateUserRepository,
});

container.register<IUpdateUserService>("IUpdateUserService", {
  useClass: UpdateUserService,
});

container.register<IUpdateUserPasswordRepository>(
  "IUpdateUserPasswordRepository",
  {
    useClass: UpdateUserPasswordRepository,
  }
);

container.register<IUpdateUserPasswordService>("IUpdateUserPasswordService", {
  useClass: UpdateUserPasswordService,
});

container.register<IDeleteUserRepository>("IDeleteUserRepository", {
  useClass: DeleteUserRepository,
});

container.register<IDeleteUserService>("IDeleteUserService", {
  useClass: DeleteUserService,
});
