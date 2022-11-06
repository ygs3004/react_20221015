import MovieHeader from "./components/movie/MovieHeader";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV";
import styled from "styled-components";
import Home from "./components/pages/Home";
import Login from "./components/practice/api/Login";
import SignUp from "./components/practice/api/SignUp";
import Post from "./components/practice/api/Post";
import Button from "./components/common/Button";
import { removeCookie } from "./utils/cookie";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
  }
  a {
    color : inherit;
    text-decoration : none;
  }
`;

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <MovieHeader />
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/*" element={<Movie />} />
          <Route path="tv" element={<TV />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="post" element={<Post />} />
        </Routes>
      </MainBlock>
      {/* <LogoutBtn>
        <Button text="Logout" onClick={() => removeCookie("access-token")} />
      </LogoutBtn> */}
    </div>
  );
}

const MainBlock = styled.main`
  padding: 50px 100px;
`;

const LogoutBtn = styled.div`
  position: fixed;
  width: 100px;
  right: 10px;
  top: 10px;
`;

export default App;
