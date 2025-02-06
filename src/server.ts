import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import swaggerUi from "swagger-ui-express";
import Routers from "./routes";
import { mongodbUrl, openapiSpecification } from "./config";
import { MongoClient } from "./database/mongo";

const app = async () => {
  await MongoClient.connect();
  const server = express();

  server.use(cors());
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiSpecification)
  );

  server.use(Routers);

  server.listen(process.env.PORT ?? 3001, () => {
    console.log(`server running on ${process.env.PORT ?? 3001}`);
  });
};

app();
