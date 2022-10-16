import { useState } from "react";

export default function Counter() {
  // useState : 상태관리 hook => 
  const [count, setCount] = useState(0);

  const increaseNum = function () {
    // 함수형 업데이트 : set함수의 인자로 콜백함수를 넣으면 콜 백 함수의 첫번째 인자로 최산 상태값을 제공한다.
    setCount(count + 1);
  };

  const decreaseNum = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}
