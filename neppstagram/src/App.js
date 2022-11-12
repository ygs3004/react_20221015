import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Login from "./components/pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import SignInForm from "./components/login/SignInForm";
import Post from "./components/pages/Post";
import PostList from "./components/posts/PostList";
import PostDetail from "./components/posts/PostDetail";

const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Block>
      <GlobalStyle />
      <InnerBlock>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signIn" element={<SignInForm />} />
          </Route>
          <Route path="/post" element={<Post />}>
            <Route path="" element={<PostList />} />
            <Route path=":id" element={<PostDetail />} />
          </Route>
        </Routes>
      </InnerBlock>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const InnerBlock = styled.div`
  width: 300px;
  height: 500px;

  border: 1px solid #bbb;
`;

export default App;
