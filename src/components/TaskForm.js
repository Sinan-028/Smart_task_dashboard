import { useState } from "react";

export default function TaskForm({ addTask }) {

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    status: "To Do"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...form,
      id: Date.now()
    };

    addTask(newTask);

    setForm({
      title: "",
      description: "",
      priority: "Low",
      dueDate: "",
      status: "To Do"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />

      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />

      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} required />

      <button>Add Task</button>
    </form>
  );
}
