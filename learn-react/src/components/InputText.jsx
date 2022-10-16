import { useState, useRef } from "react";

function InputText() {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "test@gamil.com",
  });

  // 상태값 비구조화 할당
  const { userName, email } = inputs;

  // 특정 DOM 직접 접근할 때 사용.
  //  => useRef() 호출 => 객체를 반환
  const ref = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = () => {
    setInputs({
      userName: "",
      email: "",
    });

    ref.current.focus();
    console.log(ref);
  };

  return (
    <>
      <div>
        이름 : {userName}({email})
      </div>
      <input
        type="text"
        onChange={handleInput}
        value={userName}
        name="userName"
        ref={ref}
      />
      <input type="text" name="email" value={email} onChange={handleInput} />
      <button onClick={onRemove}>삭제</button>
    </>
  );
}

export default InputText;
