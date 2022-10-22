import { useReducer } from "react";

/* 
    useReducer  
        - 컴포넌트 외부에서 상태값 관리할 수 있다.
        - 첫번째 인자로 리듀서 함수, 두번째 인자로 초기값 => 리듀서 함수의 반환값을 새로운 상태값으로 업데이트한다.
            => [상태값, 디스패치 함수]를 반환
        - 리듀서함수의 첫번째 인자는 최신 상태값, 두번째 인자로 디스패치 함수의 인자가 전달된다.
            => switch문을 통해 case에 따라 새로운 상태값을 반환하는 형식을 작성한다.
*/

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "INCREASE":
      return state + action.num;
    case "DECREASE":
      return state - action.num;
    default:
      return state;
  }
}

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE", num: 10 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "DECREASE", num: 10 })}>
        -1
      </button>
    </div>
  );
}

export default ReducerCounter;
