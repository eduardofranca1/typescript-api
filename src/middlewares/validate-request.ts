import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

interface ErrorZod {
  message: string;
  path: string[];
  code: string;
  minimum: number;
  type: string;
  inclusive: boolean;
  exact: boolean;
}

interface HandleErrors {
  message: string;
  path: string[];
}

export const handleErrors = (errorsZod: ErrorZod[]): HandleErrors[] =>
  errorsZod.map((error) => ({
    message: error.message,
    path: error.path,
  }));

export const extractZodErrors =
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
