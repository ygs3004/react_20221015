import React, { useRef } from "react";

function AddUser({ inputs, handleInput, reset, dispatch }) {
  const onClickSubmit = (e) => {
    // e.preventDefault() : 요소가 가진 기본 기능을 실행하지 않는다.
    e.preventDefault();
    dispatch({ type: "CREATE_USER", inputs, id: nextId.current });
    reset();
    nextId.current++;
  };

  const nextId = useRef(4);

  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        onChange={handleInput}
        name="name"
        value={inputs.name}
      />
      <input
        type="number"
        onChange={handleInput}
        name="age"
        value={inputs.age}
      />
      <button>등록</button>
    </form>
  );
}

export default React.memo(AddUser);
