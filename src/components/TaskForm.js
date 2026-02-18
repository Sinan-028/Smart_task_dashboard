export default function TaskForm() {
  return (
    <div>
      <h2>Add New Task</h2>
      <form>
        <input type="text" placeholder="Task Title" />
        <input type="text" placeholder="Task Description" />
        <select>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input type="date" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
