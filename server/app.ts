import Fastify, { FastifyInstance } from "fastify";
const isDevelopment = process.env.NODE_ENV === "development";

const server: FastifyInstance = Fastify({
  logger: {
    level: "info",
    transport: isDevelopment
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        }
      : undefined,
  },
});

server.get("/", async function () {
  return { message: "Hello World" };
});

async function main() {
  await server.listen({
    port: 3000,
    host: "0.0.0.0",
  });
}

// Close the server in order for it to restart
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await server.close();
    process.exit(0);
  });
});

main();
