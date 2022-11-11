import { useState } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");
  console.log(value);

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    onInsert(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </InputForm>
  );
}

const InputForm = styled.form``;

export default TodoInsert;
