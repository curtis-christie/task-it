import express from "express";
import routes from "./src/routes/indexRoutes.js";
import mongoose from "mongoose";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(routes);
  return app;
}
