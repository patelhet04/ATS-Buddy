import { FastifyPluginCallback } from "fastify";
import { generate } from "../controller/promptController";
// import { login, register } from "../controllers/authController";

const promptRoutes: FastifyPluginCallback = (server, opts, done) => {
  server.post("/generate", generate);
  done();
};

export default promptRoutes;
