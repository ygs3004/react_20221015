import styled from "styled-components";

function TodoInput() {
  return (
    <InputBlock>
      <BtnSubmit>Submit</BtnSubmit>
    </InputBlock>
  );
}

const InputBlock = styled.div`
  padding: 10px;

  input {
    width: 100%;
    padding: 5px;

    outline: none;
    border: 1px solid #e6e6e6;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  padding: 10px 0;

  border: none;

  background-color: #4d4d9c;

  color: #fff;

  cursor: pointer;
`;

export default TodoInput;
