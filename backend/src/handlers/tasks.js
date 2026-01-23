import { mockTasks } from "../utils/mockTasks.js";

export const getTaskByIdHandler = (req, res) => {
  const { findTaskIndex } = req;
  const findTask = mockTasks[findTaskIndex];
  if (!findTask) return res.sendStatus(404);
  return res.send(findTask);
};
