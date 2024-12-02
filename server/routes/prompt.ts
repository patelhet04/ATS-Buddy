import { FastifyPluginCallback } from "fastify";
// import { login, register } from "../controllers/authController";

const promptRoutes: FastifyPluginCallback = (server, opts, done) => {
  server.post("/generate", () => {});
  done();
};

export default promptRoutes;
