import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <h1>Smart Task Dashboard</h1>
      <Summary />
      <TaskForm />
      <FilterBar />
      <TaskList />
    </div>
  );
}

export default App;
