import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

type ErrorZod = {
  message: string;
  path: string[];
  code: string;
  minimum: number;
  type: string;
  inclusive: boolean;
  exact: boolean;
};

type HandleErrors = {
  message: string;
  path: string[];
};

const handleErrors = (errorsZod: ErrorZod[]) => {
  const errors: HandleErrors[] = [];

  errorsZod.forEach((error) => {
    errors.push({
      message: error.message,
      path: error.path,
    });
  });

  return errors;
};

export const validateRequest =
  (schema: ZodSchema<any>, requestType: "body" | "params" | "query") =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      switch (requestType) {
        case "body":
          await schema.parseAsync(request.body);
          break;
        case "params":
          await schema.parseAsync(request.params);
          break;
        case "query":
          await schema.parseAsync(request.query);
          break;
      }
      next();
    } catch (error: any) {
      response.status(400).json(handleErrors(error.errors));
    }
  };
