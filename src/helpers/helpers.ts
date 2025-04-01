import { IHttpResponse } from "../controllers/controller";
import { IUserResponse } from "../types";

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
