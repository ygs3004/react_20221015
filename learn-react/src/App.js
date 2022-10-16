import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import InputText from "./components/InputText";
import UserList from "./components/UserList";

function App() {
  const text = "리액트";
  const boxStyle = { backgroundColor: "red", color: "#fff" };

  return (
    /* JSX 문법
      1. 닫혀 있는 태그를 사용해야 한다.
      2. 하나의 태그로 감싸야 한다. => <div></div>, <></> (Fragment)를 통해 부모 요소 없이 감쌀수 있다.
      3. JS 값을 포함시킬 떄는 {}안에 표현식을 넣는다.
      4. 클래스는 className라는 속성으로 사용한다.
      5. 스타일 적용은 style 속성에 객체를 넣는다. => CSS 속성명은 카멜케이스로 작성한다.
    */
    <>
      {/* 
      <div className="box" style={boxStyle}>
        {text}, {1 + 1}
      </div>
      <MyComponent title="Component" active={true}></MyComponent>
      <MyComponent />
      <Counter />
      <Counter />
      <Counter />
      <InputText />
      */}

      <UserList />
    </>
  );
}

export default App;
