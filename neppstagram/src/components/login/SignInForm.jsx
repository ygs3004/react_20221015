import { useEffect, useState } from "react";
import { Button, RedButton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function SignInForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [isEmpty, setIsEmpty] = useState(true);
  const disabled = isEmpty || inputs.password1 !== inputs.password2;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  console.log(inputs);
  console.log(isEmpty);

  useEffect(() => {
    // for ~ of: 반복 가능한(iterable) 객체를 순회하며 반복한다.
    // for ~ in : 열거 가능한(emulable) 객체를 순회하며 반복한다.
    for (let value of Object.values(inputs)) {
      if (value.length < 1) {
        setIsEmpty(true);
        return;
      }
    }

    setIsEmpty(false);
  }, [inputs]);

  return (
    <>
      <Title title="SignIn" />
      <Form margin="20px 0 ">
        <Input
          placeholder="이름을 입력해주세요"
          name="name"
          onChange={handleInput}
        />
        <Input
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          name="password1"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 확인해주세요"
          name="password2"
          onChange={handleInput}
        />
        <div style={{ marginTop: "50px" }}>
          <RedButton style={{ marginTop: "5px" }} disabled={disabled}>
            SignIn
          </RedButton>
        </div>
      </Form>
    </>
  );
}

export default SignInForm;
