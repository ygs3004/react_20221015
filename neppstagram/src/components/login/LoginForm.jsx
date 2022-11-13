import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSigIn } from "../../api";
import { Button, RedButton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSigIn(email, password).then((res) => {
      console.log(res);
      navigate("/post");
    });
  };

  return (
    <>
      <Title title="Login" />
      <Form margin="20px 0" onSubmit={handleSubmit}>
        <Input
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInputs}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          onChange={handleInputs}
        />
        <div style={{ marginTop: 50 }}>
          <Button>Login</Button>
          <RedButton>
            <Link to="/signin">Signin</Link>
          </RedButton>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
