import { IHttpResponse } from "../controllers/controller";
import { IUserResponse } from "../models/user";

export const ok = <T extends string | IUserResponse | IUserResponse[] | []>(
  body: T
): IHttpResponse<T> => ({
  statusCode: 200,
  body,
});

export const created = <T extends IUserResponse>(
  body: T
): IHttpResponse<T> => ({
  statusCode: 201,
  body,
});

export const badRequest = (message: string): IHttpResponse<string> => {
  return {
    statusCode: 400,
    body: message,
  };
};

export const serverError = (): IHttpResponse<string> => ({
  statusCode: 500,
  body: "Server error",
});

export const error = (
  statusCode: number,
  body: string
): IHttpResponse<string> => ({
  statusCode,
  body,
});
