import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  const handlePriorityChange = (e) => {
    setFilter((prev) => ({ ...prev, priority: e.target.value }));
  };

  const handleStatusChange = (e) => {
    setFilter((prev) => ({ ...prev, status: e.target.value }));
  };

  return (
    <div className="flex space-x-4">
      <select
        value={filter.priority}
        onChange={handlePriorityChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select
        value={filter.status}
        onChange={handleStatusChange}
        className="border rounded px-3 py-2"
      >
        <option value="">All Status</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default FilterBar;
