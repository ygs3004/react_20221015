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
  height: 100%;
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
`;

export default Login;
