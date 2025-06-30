import { useTodos } from "../context/TodoContext";
import { useState } from "react";

function TodoInput() {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodos();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="border" required
          type="text"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)} 
        />
        <button type="submit">Add Todo</button>
        {/* <input type="checkbox" checked={false} {...todo.completed} /> */}
        {/* <button onClick={() => deleteTodo(todo.id)}>Delete</button> */}
      </form>
    </>
  );
}
export default TodoInput;
