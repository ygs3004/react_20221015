import styled from "styled-components";

function Button({ text, bgColor, onClick }) {
  return (
    <DefaultButton bgColor={bgColor} onClick={onClick}>
      {text}
    </DefaultButton>
  );
}

Button.defaultProps = {
  bgColor: "black",
};

const DefaultButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  color: white;
  border-radius: 4px;

  background-color: ${({ bgColor }) => bgColor};

  cursor: pointer;

  & + & {
    margin-top: 5px;
  }
`;

export default Button;
