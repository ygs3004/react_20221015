import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useSelector((state) => state);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
