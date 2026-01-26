//task-it/frontend/src/App.jsx
import { useState } from "react";
import mockTasks from "./utils/mockTasks.js";

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [task, setTask] = useState("");
  return (
    <>
      <h1>All Tasks</h1>
      <label htmlFor="addTask">Add Task</label>
      <br />
      <input
        aria-label="add new task"
        type="text"
        name="addTask"
        id="addTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;

//todo - add button click logic to update array of tasks, add delete button to task item
