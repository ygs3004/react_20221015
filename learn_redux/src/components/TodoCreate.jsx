import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/reducers/todos";

function TodoCreate() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const createTodo = () => {
    dispatch(addTodo(input));
  };

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <button onClick={createTodo}>등록</button>
    </div>
  );
}

export default TodoCreate;
