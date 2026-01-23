import { Router } from "express";
import { mockTasks } from "../utils/mockTasks.js";
import { resolveIndexByUserId } from "../utils/middlewares.js";

const router = Router();

router.get("/api/tasks", (req, res) => {
  const tasks = mockTasks;
  res.status(201).send(tasks);
});

router.get("/api/tasks/:id", (req, res) => {
  const requestedTask = mockTasks.filter((task) => task.id === Number(req.params.id));
  res.status(201).send(requestedTask);
});

router.post("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "add a task" });
});

router.patch("/api/tasks/:id", (req, res) => {
  res.status(201).send({ msg: "update a task" });
});

router.delete("/api/tasks/:id", resolveIndexByUserId, (req, res) => {
  const { userIndex } = req;
  mockTasks.splice(userIndex, 1);
  return res.status(200).send({ msg: `deleted task with id of ${userIndex}` });
});

export default router;
