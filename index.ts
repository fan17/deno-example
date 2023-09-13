import { APP_HOST, APP_PORT } from "root/config/constants.ts";
import router from "root/router.ts";
import _404 from "root/controllers/404.controller.ts";
import errorHandler from "root/controllers/errorHandler.controller.ts";
import { Application } from "root/deps.ts";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
