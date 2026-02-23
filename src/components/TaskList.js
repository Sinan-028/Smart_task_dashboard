import TaskItem from "./TaskItem";

export default function TaskList({ tasks, updateTask, deleteTask }) {

  if(tasks.length === 0){
    return (
      <div style={{textAlign:"center", marginTop:"30px"}}>
        <h3>No Tasks Yet 📭</h3>
        <p>Add a task to get started</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Task List</h2>

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}