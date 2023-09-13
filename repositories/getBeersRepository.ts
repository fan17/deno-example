import { DbClient } from "root/deps.ts";
import client from "root/config/database.ts";

class BeerRepo {
  selectAll() {
    return (client as DbClient).queryArray`SELECT * FROM beers ORDER BY id`;
  }
}

export default new BeerRepo();
