import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import './App.css';

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  function addTask(text) {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active")    return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;

  function clearCompleted() {
    setTasks(tasks.filter(t => !t.completed));
  }

  return (
    <div className="app">

      
      <div className="header">
        <h1><span>🌸</span>My Tasks<span>🌸</span></h1>
        
      </div>

      
      <TaskInput onAdd={addTask} />

      
      <FilterBar filter={filter} onFilterChange={setFilter} />

      
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />

      
      {tasks.length > 0 && (
        <div className="stats-bar">
          <p className="stats-text">
            <span>{completedCount}</span> from <span>{tasks.length}</span> completed task 
          </p>
          {completedCount > 0 && (
            <button className="btn-clear" onClick={clearCompleted}>
              delete completed task 
            </button>
          )}
        </div>
      )}

    </div>
  );
}

export default App;
