import { useState, useRef } from "react";

export default function AddTaskInput({ setTasks }) {
  const [task, setTask] = useState("");
  const [idCount, setIdCount] = useState(3);

  const inputRef = useRef(null);

  function handleAddTask() {
    setIdCount((prev) => prev + 1);
    const newTask = {
      id: idCount,
      title: task,
      description: "",
      status: "todo",
      subTasks: [],
    };
    setTasks((prev) => [...prev, newTask]);
    setTask("");
    inputRef.current.focus();
  }

  return (
    <>
      <label htmlFor="addTask">Add Task</label>
      <br />
      <input
        ref={inputRef}
        aria-label="add new task"
        type="text"
        name="addTask"
        id="addTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
