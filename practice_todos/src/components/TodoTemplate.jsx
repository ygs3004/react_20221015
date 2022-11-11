import styled from "styled-components";

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      <TodoContent>
        <Title> Todo 프로젝트 </Title>
        {children}
      </TodoContent>
    </TodoTemplateBlock>
  );
}

const TodoTemplateBlock = styled.div`
  height: 80vh;
  display: flex;

  border: 1px solid black;
  border-radius: 10px;
`;

const Title = styled.h1``;

const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TodoTemplate;
