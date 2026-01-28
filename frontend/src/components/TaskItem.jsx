import { FaTrash } from "react-icons/fa6";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task-item">
      <button className="checkbox-btn" onClick={() => toggleTask(task.id)}></button>
      <span>{task.title}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <FaTrash />
      </button>
    </div>
  );
}
