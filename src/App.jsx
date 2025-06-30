import { useState, useContext } from "react";
import "./App.css";
import TodoInput from "./components/ToDoInput";
import TodoItem from "./components/ToDoItem";
import TodoList from "./components/ToDoList";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider, useFilter } from "./context/FilterContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppDisplay() {
  const { theme, toggleTheme } = useTheme();
  const { filter, setFilter } = useFilter();

  return (
    <div className={`${theme === "dark" ? "dark" : ""} border border-gray-300 dark:border-gray-600 bg-gray-100`}>
      <div className=" min-h-screen p-6">
        <h1 className="mb-2 text-5xl font-bold ">ToDo App</h1>
        <button onClick={toggleTheme} className="border">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <TodoInput />
        <div className="filters">
          <button className="mr-2 border" onClick={() => setFilter("all")}>
            All
          </button>
          <button className="mr-2 border" onClick={() => setFilter("active")}>
            Active
          </button>
          <button
            className="mr-2 border"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <h1 className="font-bold">ToDo App</h1><hr/> */}
      <ThemeProvider>
        <FilterProvider>
          <TodoProvider>
            <AppDisplay />
          </TodoProvider>
        </FilterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
