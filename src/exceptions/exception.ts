import { HttpEnumStatusCode } from "./http-status-code";

export class HttpException extends Error {
  private readonly code: HttpEnumStatusCode;

  constructor(message: string, code: HttpEnumStatusCode) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, HttpException.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
