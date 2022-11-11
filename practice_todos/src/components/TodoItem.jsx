import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import styled from "styled-components";

function TodoItem({ todo, onRemove, onToggle }) {
  const { id, text, done } = todo;

  return (
    <TodoItemBlock>
      <CheckIcon className="check" onClick={() => onToggle(id)} done={done}>
        {done ? <BsCheckCircleFill /> : <BsCheckCircle />}
      </CheckIcon>

      <Text className="text" done={done}>
        {text}
      </Text>
      <RemoveIcon onClick={() => onRemove(id)}>
        <IoMdRemoveCircleOutline size={18} />
      </RemoveIcon>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  font-weight: 700;
`;

const RemoveIcon = styled.div``;

const Text = styled.div`
  flex: 1;
  text-decoration: ${(props) => props.done && "line-through"};
`;

const CheckIcon = styled.div`
  margin-right: 10px;
`;
export default TodoItem;
