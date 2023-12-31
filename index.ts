import { APP_HOST, APP_PORT } from "root/config/constants.ts";
import router from "root/router.ts";
import _404 from "root/controllers/404.controller.ts";
import { Application } from "root/deps.ts";
import EntityNotFoundException from "root/exceptions/EntityNotFoundException.ts";

const app = new Application();

// Custom middleware - timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Custom middleware - error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof EntityNotFoundException) {
      //   ctx.response.body = { error: "Not found" };
      //   ctx.response.status = 404;
      ctx.throw(404);
    } else {
      throw err;
    }
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
