import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { lighten } from "polished";
import { TODO_TYPES, useTodoDispatch } from "../hooks/useTodoReducer";

function TodoInput() {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const [active, setActive] = useState(false);

  const handleText = (e) => setText(e.target.value);

  const onCreate = () => {
    if (!active) {
      setActive(true);
      return;
    }

    if (text.length === 0) return;

    dispatch({ type: TODO_TYPES.CREATE_TODO, id: nextId.current, text });
    nextId.current++;
    setText("");
    setActive(false);
  };

  const nextId = useRef(4);

  return (
    <InputBlock>
      {active && <input type="text" onChange={handleText} value={text} />}
      <BtnSubmit onClick={onCreate}>{!active ? "Add" : "Submit"}</BtnSubmit>
    </InputBlock>
  );
}

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const InputBlock = styled.div`
  padding: 10px;

  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;

    outline: none;
    border: 1px solid #e6e6e6;

    animation-name: ${slideUp}, ${fadeIn};
    animation-duration: 0.5s, 1s;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  padding: 10px 0;

  border: none;

  background-color: #53b5ed;

  color: #fff;

  cursor: pointer;

  position: relative;
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => lighten(0.05, theme.colors.main)};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;

export default TodoInput;
