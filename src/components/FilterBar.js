export default function FilterBar({ setStatusFilter, setPriorityFilter }) {
  return (
    <div className="filters">

      <select onChange={e => setStatusFilter(e.target.value)}>
        <option value="All">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select onChange={e => setPriorityFilter(e.target.value)}>
        <option value="All">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

    </div>
  );
}