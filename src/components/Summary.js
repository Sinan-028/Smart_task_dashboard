export default function Summary({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const inProgress = tasks.filter(t => t.status === "In Progress").length;
  const todo = tasks.filter(t => t.status === "To Do").length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="summary">

      <div className="card">Total: {total}</div>
      <div className="card">Completed: {completed}</div>
      <div className="card">In Progress: {inProgress}</div>
      <div className="card">To Do: {todo}</div>

      <div className="progressBox">
        <p>Progress: {percent}%</p>
        <div className="progressBar">
          <div className="progressFill" style={{width: `${percent}%`}}></div>
        </div>
      </div>

    </div>
  );
}