import { Router } from "express";
import { getTaskByIdHandler } from "../handlers/tasks.js";
import Task from "../models/taskModel.js";

const router = Router();

router.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).send(tasks);
});

router.get("/api/tasks/:id", getTaskByIdHandler);

router.post("/api/tasks/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    return res.status(201).send(newTask);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.patch("/api/tasks/:id", (req, res) => {
  // update a task in mongoDB
  res.status(201).send({ msg: "update a task" });
});

router.delete("/api/tasks/:id", (req, res) => {
  // delete a task by _id from mongoDB
});

export default router;
