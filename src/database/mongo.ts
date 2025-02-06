import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const client = new Mongo("mongodb://localhost:27017");
    const db = client.db("node-api");

    this.client = client;
    this.db = db;

    console.log("connected to mongodb!");
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await MongoClient.disconnect();
      console.log("mongodb connection closed!");
    }
  },
};
