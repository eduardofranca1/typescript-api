import { compare } from "bcryptjs";
import { HttpException } from "../exceptions/exception";
import { HttpEnumStatusCode } from "../exceptions/http-status-code";

export const compareHashPassword = async (
  password: string,
  hashPassword: string
) => {
  const result = await compare(password, hashPassword);
  if (!result)
    throw new HttpException(
      "Passwords don't match",
      HttpEnumStatusCode.BAD_REQUEST
    );
};
