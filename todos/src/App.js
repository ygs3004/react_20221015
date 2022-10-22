import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Button from "./component/Button";

function App() {
  return (
    <ThemeProvider
      theme={{
        color: {
          red: "#f31240",
          blue: "#133afe",
          green: "#23fb13",
        },
      }}
    >
      <div>
        <Title>Hello Styled</Title>
        <Container>
          <Button text="click" size="big" color="red" />
          <Button text="클릭" color="blue" />
        </Container>
      </div>
    </ThemeProvider>
  );
}

const Title = styled.h1`
  color: red;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid black;
  width: 500px;
  height: 300px;

  margin: auto;
`;

export default App;
