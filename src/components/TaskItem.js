export default function TaskItem({ task, updateTask, deleteTask }) {

  const handleStatusChange = (e) => {
    updateTask({
      ...task,
      status: e.target.value
    });
  };

  return (
    <div className={`task ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>

      <label>Status: </label>
      <select value={task.status} onChange={handleStatusChange}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <p>Due: {task.dueDate}</p>

      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  );
}