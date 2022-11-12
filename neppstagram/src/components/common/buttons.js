import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: black;
  color: #fff;
  font-weight: 700;

  & + & {
    margin-top: 3px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ddd !important;
    `}
`;

export const RedButton = styled(Button)`
  background-color: red;
`;

export const BlueButton = styled(Button)`
  background-color: blue;
`;
