const server = Bun.serve({
  port: Bun.env.PORT,
  hostname: Bun.env.HOST_NAME,

  fetch(request) {
    console.log(request);

    return new Response("Bun Response");
  },
});
console.log(
  `Hello via Bun!\n Server is running on`,
  `${server.hostname}:${server.port}`,
);
