import { Hono } from "hono";
import mongoose from "mongoose";
import appRouter from "./routes";
import { connectToDB } from "./config/mongoose.conf";

connectToDB();
console.log('after connect to db')
const app = new Hono();
app.route("/", appRouter);
mongoose.connection.on('error',(err) => console.log(err))

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  const server = Bun.serve({
    port: Bun.env.PORT || 0,
    hostname: Bun.env.HOST || "localhost",
    fetch: app.fetch,
  });

  console.log(`Server is running on ${server.url}`);
});
