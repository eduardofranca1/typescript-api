import "reflect-metadata";
import { container } from "tsyringe";
import { IUpdateUserPasswordRepository } from "./repositories/user/update-user-password/update-user-password.repository";
import { UpdateUserPasswordRepository } from "./repositories/user/update-user-password/update-user-password-impl.repository";
import { IUpdateUserPasswordService } from "./services/user/update-user-password/update-user-password.service";
import { UpdateUserPasswordService } from "./services/user/update-user-password/update-user-password-impl.service";

container.register<IUpdateUserPasswordRepository>(
  "IUpdateUserPasswordRepository",
  {
    useClass: UpdateUserPasswordRepository,
  }
);

container.register<IUpdateUserPasswordService>("IUpdateUserPasswordService", {
  useClass: UpdateUserPasswordService,
});
