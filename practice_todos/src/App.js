import { useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Todo 만들어주세요",
      done: true,
    },
    {
      id: 2,
      text: "어렵다",
      done: false,
    },
    {
      id: 3,
      text: "스프링을 연습하는게 맞지 않나",
      done: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId.current,
        text: text,
        done: false,
      },
    ]);
    nextId.current += 1;
    console.log(todos);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <TodoInsertBLock>
        <TodoInsert onInsert={onInsert} />
      </TodoInsertBLock>
    </TodoTemplate>
  );
}

const TodoInsertBLock = styled.div`
  flex: 1;
`;

export default App;
