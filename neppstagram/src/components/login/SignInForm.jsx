import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../api";
import { RedButton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function SigninForm() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 비구조화 할당
  const { username, password, email, confirmPassword } = inputs;

  const [isEmpty, setIsEmpty] = useState(true);
  const disabled = isEmpty || password !== confirmPassword;
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    // for ~ of : 반복 가능한(Iterable) 객체를 순회하며 반복한다.
    // for ~ in : 열거 가능한(emulable) 객체를 순회하며 반복한다.
    for (let value of Object.values(inputs)) {
      if (value.length < 1) {
        setIsEmpty(true);
        return;
      }
    }
    setIsEmpty(false);
  }, [inputs, isEmpty]);

  const handleSubmit = (e) => {
    e.preventDefault();

    postSignUp(username, email, password).then(() => {
      alert("회원가입에 성공하였습니다.");
      navigate("/accounts/login");
    });
  };

  return (
    <>
      <Title title="Signin" />
      <Form margin="20px 0" onSubmit={handleSubmit}>
        <Input
          placeholder="이름을 입력해주세요"
          name="username"
          onChange={handleInput}
        />
        <Input
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          type="password"
          name="password"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 확인해주세요"
          type="password"
          name="confirmPassword"
          onChange={handleInput}
        />
        <div style={{ marginTop: 50 }}>
          <RedButton style={{ marginTop: "5px" }} disabled={disabled}>
            Signin
          </RedButton>
        </div>
      </Form>
    </>
  );
}

export default SigninForm;
