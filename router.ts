import { Router } from "./deps.ts";
import beers from "./controllers/beers.controller.ts";
import beerDetails from "root/controllers/beerDetails.controller.ts";

const router = new Router();

router
  .get("/beers", beers)
  .get("/beers/:id", beerDetails);

export default router;
