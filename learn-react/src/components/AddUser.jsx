import { useState } from "react";

function AddUser({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
  });

  const { name, age } = inputs;

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    onCreate(inputs);
    setInputs({
      name: "",
      age: "",
    });
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={inputs.name}
      />
      <input
        type="number"
        name="age"
        onChange={handleInput}
        value={inputs.age}
      />
      <button>등록</button>
    </form>
  );
}

export default AddUser;
