import { DbClient } from "../deps.ts";
import client from "../config/database.ts";

class BeerRepo {
  selectAll() {
    return (client as DbClient).queryArray`SELECT * FROM beers ORDER BY id`;
  }
}

export default new BeerRepo();
