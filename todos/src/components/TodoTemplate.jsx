import styled from "styled-components";

function TodoTemplate({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background-color: #fff;
`;

export default TodoTemplate;
