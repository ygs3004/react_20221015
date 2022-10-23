import styled, { css, keyframes } from "styled-components";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { useState } from "react";
import {
  TODO_TYPES,
  useTodoDispatch,
  useTodoState,
} from "../hooks/userTodoReducer";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const { remove, setRemove } = useState(false);

  const dispatch = useTodoDispatch();

  const value = useTodoState();

  const onToggle = () => {
    dispatch({ type: TODO_TYPES.TOGGLE_TODO, id });
  };

  const onRemove = () => {
    //setRemove(true);
    setTimeout(() => {
      dispatch({ type: TODO_TYPES.REMOVE_TODO, id });
    }, 200);
  };

  return (
    <ItemBlock remove={remove}>
      <CheckBox onClick={onToggle}>
        {done ? (
          <AiFillCheckCircle size={20} />
        ) : (
          <AiOutlineCheckCircle size={20} />
        )}
      </CheckBox>
      <TodoText done={done}>{text}</TodoText>

      <AiFillDelete
        onMouseOver={({ target }) => (target.style.color = "red")}
        onMouseOut={({ target }) => (target.style.color = "black")}
        onClick={onRemove}
        cursor="pointer"
      />
    </ItemBlock>
  );
}

const slideOut = keyframes`
  to{
    transform : translateX(100%);
  }
`;

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  ${({ remove }) =>
    remove &&
    css`
      animation-name: ${slideOut} 0.2s;
    `}
`;

const CheckBox = styled.div`
  color: ${({ theme }) => theme.colors.main};
`;

const TodoText = styled.p`
  flex: 1; //남은 여백을 p 태그가 모두 가짐
  font-size: 0.8rem;
  margin-left: 5px;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
      color: #aaa;
    `}
`;

export default TodoItem;