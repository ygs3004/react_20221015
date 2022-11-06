import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button";
import InputBox from "../../movie/InputBox";
import FormBox from "./FormBox";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = inputs;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    for (const pair of Object.entries(inputs)) {
      if (pair[1].length <= 0) {
        alert("빠짐없이 입력해주세요");
        return;
      }
    }

    if (password !== confirmPassword) return;

    // promise 반환
    try {
      let result = await axios.post("http://101.101.218.43/users", {
        name,
        password,
        email,
      });
      alert("회원가입에 성공하였습니다.");
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormBox onSubmit={onSignUp}>
      <h3>Login</h3>
      <InputWrapper>
        <InputBox
          type="text"
          placeholder="이름을 입력하세요"
          name="name"
          onChange={handleInput}
        />
        <InputBox
          type="email"
          placeholder="email을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <InputBox
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          onChange={handleInput}
        />
        <InputBox
          type="password"
          placeholder="비밀번호를 확인해주세요"
          name="confirmPassword"
          onChange={handleInput}
        />
      </InputWrapper>
      <Button text="Sign In" />
      <Button text="Sign Up" bgColor="#bbb" />
      <Button text="Back" bgColor="red" onClick={() => navigate("/login")} />
    </FormBox>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export default SignUp;
