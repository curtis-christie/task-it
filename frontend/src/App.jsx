//task-it/frontend/src/App.jsx
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <div>{tasks}!</div>
    </>
  );
}

export default App;

//todo - header, input field with add button, task list below with checkbox and delete button
