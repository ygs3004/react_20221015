import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import Login from "./components/pages/Login";
import styled, { createGlobalStyle } from "styled-components";
import SigninForm from "./components/login/SigninForm";
import PostList from "./components/post/PostList";
import PostDetail from "./components/post/PostDetail";
import Post from "./components/pages/Post";
import AppBlock from "./components/common/AppBlock";
import Edit from "./components/edit/Edit";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
   a {
    color: inherit;
    text-decoration: none;
   }
`;

function App() {
  return (
    <Block>
      <InnerBlock>
        <Routes>
          <Route path="/accounts" element={<Login />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signin" element={<SigninForm />} />
          </Route>
          <Route path="/" element={<AppBlock />}>
            <Route path="post" element={<Post />}>
              <Route path="" element={<PostList />} />
              <Route path=":id" element={<PostDetail />} />
            </Route>
            <Route path="edit" element={<Edit />} />
          </Route>
        </Routes>
      </InnerBlock>
      <GlobalStyle />
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
  width: 200px;
  height: 500px;
  border: 1px solid #bbb;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
