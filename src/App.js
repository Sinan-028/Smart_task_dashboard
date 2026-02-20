import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";

function App() {

  // STATE
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // UPDATE TASK (status / edit)
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Smart Task Dashboard</h1>

      <Summary tasks={tasks} />

      <TaskForm addTask={addTask} />

      <FilterBar />

      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;