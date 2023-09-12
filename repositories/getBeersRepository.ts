import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import client from "../config/database.ts";

class BeerRepo {
	selectAll() {
		return (client as Client).queryArray`SELECT * FROM beers ORDER BY id`;
	}
}

export default new BeerRepo();