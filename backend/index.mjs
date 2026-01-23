//task-it/backend/index.mjs
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { mockTasks } from "./src/utils/mockTasks.js";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  const tasks = mockTasks;
  res.status(201).send(tasks);
});

app.get("/api/tasks", (req, res) => {
  res.status(201).send({ msg: "get all tasks" });
});

app.get("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "get one task" });
});

app.post("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "add a task" });
});

app.patch("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "update a task" });
});

app.delete("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "delete a task" });
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
