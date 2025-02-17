import { genSalt, hash } from "bcryptjs";
import { HttpException } from "../exceptions/exception";
import { HttpEnumStatusCode } from "../exceptions/http-status-code";

export const hashPassword = async (password: string) => {
  try {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    return hashPassword;
  } catch (error) {
    throw new HttpException("Server error", HttpEnumStatusCode.SERVER_ERROR);
  }
};
