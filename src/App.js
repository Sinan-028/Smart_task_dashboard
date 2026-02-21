import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // ADD
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // DELETE
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // UPDATE
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // FILTER + SORT LOGIC
  const filteredTasks = tasks
    .filter(task =>
      statusFilter === "All" || task.status === statusFilter
    )
    .filter(task =>
      priorityFilter === "All" || task.priority === priorityFilter
    )
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div className="container">
      <h1>Smart Task Dashboard</h1>

      <Summary tasks={tasks} />

      <TaskForm addTask={addTask} />

      <FilterBar
        setStatusFilter={setStatusFilter}
        setPriorityFilter={setPriorityFilter}
      />

      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;