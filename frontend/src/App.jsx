//task-it/frontend/src/App.jsx
import { useState } from "react";
import mockTasks from "./utils/mockTasks.js";
import TaskList from "./components/TaskList.jsx";
import AddTaskInput from "./components/AddTaskInput.jsx";

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [filter, setFilter] = useState({ property: "status", value: "todo" });

  function handleFilterChange(e) {
    setFilter({ ...filter, value: e.target.value });
  }

  function handleTasksSort(e) {
    const sortByProperty = e.target.value;
    const sortedTasks = tasks.toSorted(sortTasks(sortByProperty));
    setTasks(sortedTasks);
  }

  function sortTasks(property) {
    return function (a, b) {
      const valueA = a[property];
      const valueB = b[property];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      } else {
        if (valueA < valueB) return 1;
        if (valueA > valueB) return -1;
        return 0;
      }
    };
  }

  return (
    <div className="main">
      <h1>All Tasks</h1>
      <AddTaskInput setTasks={setTasks} />
      <select name="filter" id="filter-dropdown" onChange={handleFilterChange}>
        <option value="todo">Todo</option>
        <option value="done">Completed</option>
      </select>
      <select name="sort" id="sort-dropdown" onChange={handleTasksSort}>
        <option value="title">Title</option>
        <option value="id">Created At Date</option>
      </select>
      <TaskList tasks={tasks} filter={filter} setTasks={setTasks} />
    </div>
  );
}

export default App;
