import styled, { css } from "styled-components";

function Button({ text, size, color }) {
  return (
    <StyledButton height={20} size={size} color={color}>
      {text}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "green",
};

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  height: 40px;

  border-radius: 4px;
  background-color: #5434fe;
  color: white;

  padding: 0 20px;
  height: ${(props) => props.height + "px"};

  ${({ theme, color }) => css`
    background-color: ${theme.colors[color]};
  `}

  ${({ size }) =>
    size === "big" &&
    css`
      font-size: 1.4rem;
      font-weight: 700;
      height: 50px;
    `}
  & + & {
    margin-left: 10px;
  }
`;

export default Button;
