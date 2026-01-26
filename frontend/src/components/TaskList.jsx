import TaskItem from "./taskItem.jsx";

export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
}
