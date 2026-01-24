import mongoose from "mongoose";
import Task from "../models/taskModel.js";

// get task by id
export const getTaskByIdHandler = async (req, res) => {
  const id = req.params.id;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) return res.status(400).send({ msg: "id is an invalid ObjectId" });
  const task = await Task.findById(id);
  return res.status(200).send(task);
};

// add task handler
export const addTaskHandler = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    return res.status(201).send(newTask);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// update task handler
export const updateTaskHandler = async (req, res) => {
  // update logic
  const { id } = req.params;
  const updates = req.body;
  console.log(id);

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedTask) {
      return res.status(404).send({ message: "Task not found." });
    }

    res.send(updatedTask);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// delete task handler
export const deleteTaskHandler = async (req, res) => {
  // delete logic
};
