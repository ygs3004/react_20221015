import { useDispatch, useSelector } from "react-redux";
import { addCounter, subCounter } from "../state/reducers/counter";

function Counter() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(addCounter())}>+1</button>
      <button onClick={() => dispatch(subCounter())}>-1</button>
    </div>
  );
}

export default Counter;
