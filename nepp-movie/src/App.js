import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import MovieHeader from "./components/movie/MovieHeader";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV";
import Post from "./components/practice/api/Post";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  a{
    color:inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <div>
      <Reset />
      <MovieHeader />
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie" element={<Movie />}></Route>
          <Route path="tv" element={<TV />}></Route>
        </Routes>
        <Post />
      </MainBlock>
      <GlobalStyle />
    </div>
  );
}

const MainBlock = styled.main`
  padding: 50px 100px;
`;

export default App;
