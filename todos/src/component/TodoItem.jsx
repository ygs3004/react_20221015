import styled from "styled-components";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

function TodoItem() {
  return (
    <ItemBlock>
      <AiFillCheckCircle />
      <TodoText>디자인 만들기</TodoText>
      <AiFillDelete
        onMouseOver={({ target }) => (target.style.color = "red")}
        onMouseOut={({ target }) => (target.style.color = "black")}
      />
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
`;

const TodoText = styled.p`
  flex: 1; //남은 여백을 p 태그가 모두 가짐
  font-size: 0.8rem;
  margin-left: 5px;
`;

export default TodoItem;
