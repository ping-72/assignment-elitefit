import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen container mx-auto p-4 bg-blue-50">
        <h1 className="text-3xl font-bold mb-4 text-center text-sky-500">
          Task Manager
        </h1>
        <Dashboard />
      </div>
    </TaskProvider>
  );
}

export default App;
