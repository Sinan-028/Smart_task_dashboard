import TaskItem from "./TaskItem";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}