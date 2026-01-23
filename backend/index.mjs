//task-it/backend/index.mjs
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tasksRouter from "./src/routes/taskRoutes.js";

const app = express();
app.use(express.json());
app.use(tasksRouter);
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.status(201).send({ msg: "index page" });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database.");
    process.exit(1);
  });
