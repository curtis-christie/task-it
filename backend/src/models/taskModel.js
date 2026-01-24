//task-it/backend/src/models/taskModel.js
import mongoose, { Schema } from "mongoose";

const subTaskSchema = new Schema({
  title: {
    type: String,
    required: "A name is required.",
  },
  status: {
    type: String,
    enum: ["todo", "done"],
    lowercase: true,
    default: "todo",
  },
});

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: "A name is required.",
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["todo", "done"],
      lowercase: true,
      default: "todo",
    },
    subTasks: {
      type: [subTaskSchema],
    },
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
