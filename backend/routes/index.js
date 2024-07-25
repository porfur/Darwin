import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import artistRouter from "./artist";
import { cors } from "hono/cors";

const appRouter = new Hono()
  .use(cors())
  .use(logger(customLogger))
  .use("/*", serveStatic({ root: "../client/dist/" }))
  .get(api(), (c) => c.text("/api"))
  .route(api("/artists"), artistRouter);

export default appRouter;

// [[Helper functions]]
function customLogger(args) {
  return console.log(...args);
}

function api(route = "") {
  return "/api" + route;
}
