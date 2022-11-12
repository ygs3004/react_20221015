import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <Block>
      <Outlet />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  padding: 0 10px;
`;

export default Login;
