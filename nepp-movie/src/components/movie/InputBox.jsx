import styled from "styled-components";

function InputBox({
  type,
  children,
  placeholder,
  onChange,
  name,
  handleFocus,
}) {
  return (
    <BarBlock>
      <SearchInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onBlur={() => handleFocus(false)}
        onFocus={() => handleFocus(true)}
      />
      {children}
    </BarBlock>
  );
}

InputBox.defaultProps = {
  type: "text",
};

const BarBlock = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 300px;
  min-width: 140px;

  padding: 10px;
  border: 1px solid black;

  & + & {
    margin-top: 10px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export default InputBox;
