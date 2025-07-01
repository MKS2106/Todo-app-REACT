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
      <form onSubmit={handleSubmit} className="mb-2">
        <input
          className="border"
          required
          type="text"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="ml-4 mr-2 border" type="submit">
          Add Todo
        </button>
      </form>
    </>
  );
}
export default TodoInput;
