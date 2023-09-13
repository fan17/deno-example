import { APP_HOST, APP_PORT } from "./config/constants.ts";
import router from "./router.ts";
import _404 from "./controllers/404.controller.ts";
import errorHandler from "./controllers/errorHandler.controller.ts";
import { Application } from "./deps.ts";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
