import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
    public client?:Client;

	constructor() {
		this.connect();
	}

	async connect() {
		this.client = new Client({
			user: "postgres",
			database: "deno_example_db",
			hostname: "localhost",
			password: "myPassword",
			port: 5432,
		});
		
			await this.client.connect();
	
	}
}

export default new Database().client;