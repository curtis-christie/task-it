import TaskItem from "./taskItem.jsx";

export default function TaskList({ tasks, filter, setTasks }) {
  const { value: filterValue, property: filterProp } = filter;

  function handleToggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        return task.id === id
          ? { ...task, status: task.status === "todo" ? "done" : "todo" }
          : task;
      }),
    );
  }

  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const filteredTasks = tasks.filter((task) => {
    return task?.[filterProp] === filterValue;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          toggleTask={handleToggleTask}
          deleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
