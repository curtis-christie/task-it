import { Router } from "express";
import { mockTasks } from "../utils/mockTasks.js";
import { resolveIndexByTaskId } from "../utils/middlewares.js";
import { getTaskByIdHandler } from "../handlers/tasks.js";

const router = Router();

router.get("/api/tasks", (req, res) => {
  const tasks = mockTasks;
  res.status(201).send(tasks);
});

router.get("/api/tasks/:id", resolveIndexByTaskId, getTaskByIdHandler);

router.post("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "add a task" });
});

router.patch("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "update a task" });
});

router.delete("/api/tasks/:id", resolveIndexByTaskId, (req, res) => {
  const { taskIndex } = req;
  mockTasks.splice(taskIndex, 1);
  return res.status(200).send({ msg: `deleted task with id of ${taskIndex}` });
});

export default router;
