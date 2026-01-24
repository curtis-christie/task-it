import Task from "../models/taskModel.js";

export const resolveIndexByTaskId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findTaskIndex = mockTasks.findIndex((task) => task.id === parsedId);
  if (findTaskIndex === -1) return res.sendStatus(404);
  req.findTaskIndex = findTaskIndex;
  next();
};
