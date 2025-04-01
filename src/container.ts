import "reflect-metadata";
import { container } from "tsyringe";
import { IDeleteUserRepository } from "./repositories/user/delete-user/delete-user.repository";
import { DeleteUserRepository } from "./repositories/user/delete-user/delete-user-impl.repository";
import { IUpdateUserRepository } from "./repositories/user/update-user/update-user.repository";
import { UpdateUserRepository } from "./repositories/user/update-user/update-user-impl.repository";
import { IUpdateUserPasswordRepository } from "./repositories/user/update-user-password/update-user-password.repository";
import { UpdateUserPasswordRepository } from "./repositories/user/update-user-password/update-user-password-impl.repository";
import { IDeleteUserService } from "./services/user/delete-user/delete-user.service";
import { DeleteUserService } from "./services/user/delete-user/delete-user-impl.service";
import { IUpdateUserService } from "./services/user/update-user/update-user.service";
import { UpdateUserService } from "./services/user/update-user/update-user-impl.service";
import { IUpdateUserPasswordService } from "./services/user/update-user-password/update-user-password.service";
import { UpdateUserPasswordService } from "./services/user/update-user-password/update-user-password-impl.service";

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
