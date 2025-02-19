import React, { useContext, useState, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";
// import { Button } from "lucide-react";
// import { Button } from "@nextui-org/react";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editableTask, setEditableTask] = useState(task);

  const toggleComplete = useCallback(() => {
    updateTask({ ...task, completed: !task.completed });
  }, [task, updateTask]);

  const handleEditChange = useCallback((e) => {
    const { name, value } = e.target;
    setEditableTask((prev) => ({ ...prev, [name]: value }));
  }, []);

  const saveEdit = useCallback(() => {
    updateTask(editableTask);
    setIsEditing(false);
  }, [editableTask, updateTask]);

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      {isEditing ? (
        <div className="flex-1 mr-4 text-black">
          <input
            type="text"
            name="title"
            value={editableTask.title}
            onChange={handleEditChange}
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <textarea
            name="description"
            value={editableTask.description}
            onChange={handleEditChange}
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <input
            type="date"
            name="dueDate"
            value={editableTask.dueDate}
            onChange={handleEditChange}
            className="w-full border rounded px-2 py-1 mb-2"
          />
          <select
            name="priority"
            value={editableTask.priority}
            onChange={handleEditChange}
            className="w-full border rounded px-2 py-1"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      ) : (
        <div className="flex-1 mr-4">
          <h3
            className={`text-lg font-bold ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </h3>
          <p className="text-sm text-gray-700">{task.description}</p>
          <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
          <p className="text-sm text-gray-600">Priority: {task.priority}</p>
        </div>
      )}

      <div className="flex flex-col space-y-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={toggleComplete}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        {isEditing ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
            onClick={saveEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
