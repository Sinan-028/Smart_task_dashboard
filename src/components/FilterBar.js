export default function FilterBar() {
  return (
    <div>
      <h2>Filters</h2>
      <select>
        <option>All Status</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select>
        <option>All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
}
