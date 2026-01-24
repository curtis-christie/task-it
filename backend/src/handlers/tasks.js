import mongoose from "mongoose";
import Task from "../models/taskModel.js";

export const getTaskByIdHandler = async (req, res) => {
  const id = req.params.id;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return res.status(400).send({ msg: "id is an invalid ObjectId" });
  const task = await Task.findById(id);
  return res.status(200).send(task);
};

// add task handler

// update task handler

// delete task handler
