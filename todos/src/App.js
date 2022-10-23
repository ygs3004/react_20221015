import "./App.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import TodoTemplate from "./component/TodoTemplate";
import TodoHeader from "./component/TodoHeader";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import useTodoReducer from "./hooks/userTodoReducer";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;

  li{
    list-style: none;
  }
}


`;

function App() {
  const [todos] = useTodoReducer();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors: { main: "#53b5ed" } }}>
        <AppBlock>
          <TodoTemplate>
            <TodoHeader />
            <TodoList todos={todos} />
            <TodoInput />
          </TodoTemplate>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #f4f4f4;
`;

export default App;
