import { useState, useContext, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";
// import { Button } from "lucide-react"; // Example usage of Lucid React

const initialFormState = {
  title: "",
  description: "",
  dueDate: "",
  priority: "Medium",
  completed: false,
};

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Assign a unique id using Date.now()
      addTask({ ...formData, id: Date.now().toString() });
      setFormData(initialFormState);
    },
    [formData, addTask]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow p-4 rounded mb-4 bg-amber-50 text-black"
    >
      <h2 className="text-xl font-bold mb-2">Add New Task</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
