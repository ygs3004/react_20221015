import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <TodoItemBlock>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  flex: 1;

  min-height: 60vh;
  min-width: 50vw;
`;

export default TodoList;
