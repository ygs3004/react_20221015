import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <ListBlock>
      <TodoItem />
    </ListBlock>
  );
}

const ListBlock = styled.ul`
  flex: 1;
`;

export default TodoList;
