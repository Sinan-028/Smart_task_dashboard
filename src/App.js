import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Smart Task Dashboard</h1>

      <Summary tasks={tasks} />

      <TaskForm addTask={addTask} />

      <FilterBar />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
