import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, RedButton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function LoginForm() {
  return (
    <>
      <Title title="Login" />
      <Form margin="20px 0 ">
        <Input placeholder="이메일을 입력하세요" />
        <Input placeholder="비밀번호를 입력하세요" />
        <div style={{ marginTop: "50px" }}>
          <Button>Login</Button>
          <RedButton>
            <Link to="/signIn">SignIn</Link>
          </RedButton>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
