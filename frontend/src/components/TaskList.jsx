import TaskItem from "./taskItem.jsx";

export default function TaskList({ tasks, filter }) {
  const { value: filterValue, property: filterProp } = filter;
  console.log(tasks);

  const filteredTasks = tasks.filter((task) => {
    return task?.[filterProp] === filterValue;
  });

  console.log(tasks);

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
}
