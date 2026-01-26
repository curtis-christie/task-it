//task-it/frontend/src/App.jsx
import { useState } from "react";
import mockTasks from "./utils/mockTasks.js";
import TaskList from "./components/TaskList.jsx";
import AddTaskInput from "./components/AddTaskInput.jsx";

function App() {
  const [tasks, setTasks] = useState(mockTasks);

  return (
    <>
      <h1>All Tasks</h1>
      <AddTaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;

//todo - add delete button to task item
