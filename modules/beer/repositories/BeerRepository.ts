import { DbClient, Injectable } from "root/deps.ts";
import dbClient from "root/config/database.ts";

@Injectable()
export class BeerRepository {
  selectAll() {
    return (dbClient as DbClient).queryArray`SELECT * FROM beers ORDER BY id`;
  }
}
