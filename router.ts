import { Router } from "./deps.ts";
import beers from "./controllers/beers.controller.ts";

const router = new Router();

router.get("/beers", beers);

export default router;
