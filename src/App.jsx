import { useState, useContext} from "react";
// import "./App.css";
import TodoInput from "./components/ToDoInput";
import TodoItem from "./components/ToDoItem";
import TodoList from "./components/ToDoList";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider, useFilter } from "./context/FilterContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";


function AppDisplay(){
  const {theme, toggleTheme} = useTheme();
  const {filter, setFilter} = useFilter();
  
  return(
    <div className={theme === "dark" ? "dark" : ""}>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
       <h1>ToDo App</h1>
        <button onClick={toggleTheme} className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <TodoInput />
        <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
       <TodoList />
    </div>
    </div>
  )
}

function App() {


  return (
    <div className="border">
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
