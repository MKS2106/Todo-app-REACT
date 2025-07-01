import { useTodos } from "../context/TodoContext";
import { useState } from "react";
function TodoItem({ todo }) {
  const [newText, setNewText] = useState(todo.todoName);
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="mt-2 flex">
      <input
        className="mr-2"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            value={newText}
            required
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span
            className={`flex-grow ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.todoName}
          </span>
          <button
            className="ml-4 mr-2 border"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
      <button className="ml-4 mr-2 border" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}
export default TodoItem;
