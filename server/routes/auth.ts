import { FastifyPluginCallback } from "fastify";
// import { login, register } from "../controllers/authController";

const authRoutes: FastifyPluginCallback = (server, opts, done) => {
  server.post("/login", () => {});
  server.post("/register", () => {});
  done();
};

export default authRoutes;
