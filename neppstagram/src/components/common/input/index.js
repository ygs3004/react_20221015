import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #bbb;
  outline: none;

  & + & {
    margin-top: 5px;
  }
`;
