import { Router } from "express";
import {
  addTaskHandler,
  deleteTaskHandler,
  getTaskByIdHandler,
  updateTaskHandler,
} from "../handlers/tasks.js";
import Task from "../models/taskModel.js";

const router = Router();

router.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).send(tasks);
});

router.get("/api/tasks/:id", getTaskByIdHandler);

router.post("/api/tasks/", addTaskHandler);

router.patch("/api/tasks/:id", updateTaskHandler);

router.delete("/api/tasks/:id", deleteTaskHandler);

export default router;
