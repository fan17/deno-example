import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
    public client?:Client;

	constructor() {
		this.connect();
	}

	async connect() {
		this.client = new Client({
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