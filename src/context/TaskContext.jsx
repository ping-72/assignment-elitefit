import React, { createContext, useState, useEffect, useCallback } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";
import useLocalStorage from "../hooks/useLocalStoreage";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  const addTask = useCallback((task) => {
    setTasks((prev) => [...prev, task]);
  }, []);

  const updateTask = useCallback((updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
