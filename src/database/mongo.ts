import { MongoClient as Mongo, Db } from "mongodb";
import {
  mongodb_database,
  mongodb_database_test,
  mongodb_url,
} from "../config";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const client = new Mongo(mongodb_url);
    const db = client.db(mongodb_database_test);

    this.client = client;
    this.db = db;

    console.log("connected to mongodb!");
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();

      this.client = undefined as unknown as Mongo;
      this.db = undefined as unknown as Db;

      console.log("mongodb connection closed!");
    }
  },
};

export const MongoClientForTests = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const client = new Mongo(mongodb_url);
    const db = client.db(mongodb_database_test);

    this.client = client;
    this.db = db;

    console.log("connected to mongodb!");
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();

      this.client = undefined as unknown as Mongo;
      this.db = undefined as unknown as Db;

      console.log("mongodb connection closed!");
    }
  },
};
