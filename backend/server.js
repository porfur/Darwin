import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import appRouter from "./routes";

const app = new Hono();
app.route("/", appRouter);

const server = Bun.serve({
  port: Bun.env.PORT || 0,
  hostname: Bun.env.HOST || "localhost",
  fetch: app.fetch,
});

console.log(`Server is running on ${server.url}`)
