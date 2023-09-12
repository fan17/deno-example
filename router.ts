import { Router } from "https://deno.land/x/oak/mod.ts";

import beers from "./controllers/beers.controller.ts";

const router = new Router();

router
  .get("/beers", beers)

export default router;