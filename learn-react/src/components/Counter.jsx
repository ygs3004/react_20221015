import { useState, useEffect } from "react";

export default function Counter() {
  // useState : 상태관리 hook => 상태 변화가 있으면 재렌더링 발생!
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increaseNum = () => {
    // 함수형 업데이트 : set함수의 인자로 콜백함수를 넣으면 콜백함수의 첫번째 인자로 최신 상태값을 전달한다.
    setCount((num) => num + 1);
  };

  const decreaseNum = () => {
    setCount((num) => num - 1);
  };

  useEffect(() => {
    // componentDidMount, componentDidUpdate와 같이 동작한다.
    console.log("update");
  });

  useEffect(() => {
    // componentDidMount
    console.log("마운트 되었습니다.");
    return () => {
      // componentWillUnmount
      console.log("언마운트 되었습니다.");
    };
  }, []);

  useEffect(() => {
    // useEffect의 두번째 인자로 [](의존성 배열)을 전달한다. => [] 안의 값이 변경되었을 때만 실행된다.
    document.title = `count : ${count}`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <h2>
        {input} : {count}
      </h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}
