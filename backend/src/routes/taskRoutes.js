import { Router } from "express";
import { mockTasks } from "../utils/mockTasks.js";
import { resolveIndexByTaskId } from "../utils/middlewares.js";
import { getTaskByIdHandler } from "../handlers/tasks.js";
import Task from "../models/taskModel.js";
import mongoose from "mongoose";

const router = Router();

router.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).send(tasks);
});

router.get("/api/tasks/:id", getTaskByIdHandler);

router.post("/api/tasks/", (req, res) => {
  // add new task to mongoDB
});

router.patch("/api/tasks/:id", (req, res) => {
  // update a task in mongoDB
  res.status(201).send({ msg: "update a task" });
});

router.delete("/api/tasks/:id", resolveIndexByTaskId, (req, res) => {
  // delete a task by _id from mongoDB
  const { taskIndex } = req;
  mockTasks.splice(taskIndex, 1);
  return res.status(200).send({ msg: `deleted task with id of ${taskIndex}` });
});

export default router;
