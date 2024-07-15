import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import artistRouter from "./artist";


const appRouter = new Hono()
  .use(logger(customLogger))
  .use("/*", serveStatic({ root: "../client/dist/" }))
  .get(api(), (c) => c.text("/api"))
  .route(api("/artist"), artistRouter);

export default appRouter;

// [[Helper functions]]
function customLogger(args) {
  return console.log(...args);
}

function api(route = "") {
    return "/api" + route;
}
