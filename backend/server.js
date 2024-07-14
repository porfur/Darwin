import { Hono } from "hono";
import artistRouter from './routes/artist'

const app = new Hono();
app.get("/", (c) => c.text("Hello Bun!"));
app.route('/artist', artistRouter)

 

Bun.serve({
  port: Bun.env.PORT||3000,
  hostname: Bun.env.HOST||"localhost",
  fetch:app.fetch
});
