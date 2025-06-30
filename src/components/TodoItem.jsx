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

  // const
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input value={newText} required onChange={(e) => setNewText(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span className={`flex-grow ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}>{todo.todoName}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
export default TodoItem;
