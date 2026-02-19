export default function TaskItem({ task }) {
  return (
    <div style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Due: {task.dueDate}</p>
    </div>
  );
}
