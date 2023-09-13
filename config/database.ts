import { DbClient } from "../deps.ts";

class Database {
  public client?: DbClient;

  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new DbClient({
      user: Deno.env.get("DB_USER_NAME"),
      database: Deno.env.get("DB_NAME"),
      hostname: Deno.env.get("DB_HOST"),
      password: Deno.env.get("DB_USER_PASSWORD"),
      port: Number(Deno.env.get("DB_PORT")),
    });

    await this.client.connect();
  }
}

export default new Database().client;
