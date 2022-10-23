import styled from "styled-components";
import { useTodoState } from "../hooks/useTodoReducer";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoState();
  return (
    <ListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListBlock>
  );
}

const ListBlock = styled.ul`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default TodoList;
