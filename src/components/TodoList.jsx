import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import TodoItem from "./ToDoItem";

function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // default: show all todos
  });

  return (
    <ul>
      {filteredTodos.length === 0 ? (
        <p>No todos to show</p>
      ) : (
        filteredTodos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))
      )}
    </ul>
  );
}
export default TodoList;
