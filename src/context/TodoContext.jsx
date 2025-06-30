import { useContext } from "react";
import { useState, useEffect, createContext } from "react";

export const TodoContext = createContext([]);
export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  //add todo
  const addTodo = (todoName) => {
    const newTodo = {
      id: Date.now(),
      todoName,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todoName: newText } : todo))
    );
  };

  //toggle Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{todos, addTodo, deleteTodo, toggleTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
export default TodoProvider; // keep an Eye
