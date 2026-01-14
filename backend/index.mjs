//task-it/backend/index.mjs
import express from "express";
import dotenv from "dotenv";

const app = express();

const PORT = dotenv.config.PORT || 3000;

app.listen(3000, () => {
  console.log("listening on port 3000");
});
