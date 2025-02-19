import React, { useState, useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ priority: "", status: "" });

  // Filtering tasks based on search and filter criteria
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority = filter.priority
        ? task.priority === filter.priority
        : true;
      const matchesStatus = filter.status
        ? filter.status === "completed"
          ? task.completed
          : !task.completed
        : true;

      return matchesSearch && matchesPriority && matchesStatus;
    });
  }, [tasks, searchTerm, filter]);

  // Split tasks into sections
  const upcomingTasks = filteredTasks.filter(
    (task) => !task.completed && new Date(task.dueDate) >= new Date()
  );
  const overdueTasks = filteredTasks.filter(
    (task) => !task.completed && new Date(task.dueDate) < new Date()
  );
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div className="space-y-8">
      <TaskForm />
      <div className="bg-slate-200 p-4  m-0 md:m-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-teal-500 bg-amber-50 p-4">
          <div className=" md:mb-0 w-full md:w-1/2 m-2">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className=" md:mb-0 w-full md:w-1/2 m-2">
            <FilterBar filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <br />
        <section className="space-y-2 bg-amber-200 p-2 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Tasks</h2>
          <div className="space-y-2">
            {upcomingTasks.length > 0 ? (
              upcomingTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <p className="text-gray-500">No upcoming tasks.</p>
            )}
          </div>
        </section>
        <br />
        <section className="space-y-2 bg-red-300 p-2 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Overdue Tasks</h2>
          <div className="space-y-2">
            {overdueTasks.length > 0 ? (
              overdueTasks.map((task) => <TaskItem key={task.id} task={task} />)
            ) : (
              <p className="text-gray-500">No overdue tasks.</p>
            )}
          </div>
        </section>
        <br />
        <section className="space-y-2 bg-lime-300 p-2 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Completed Tasks</h2>
          <div className="space-y-2">
            {completedTasks.length > 0 ? (
              completedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <p className="text-gray-500">No completed tasks.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
