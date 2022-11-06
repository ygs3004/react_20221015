import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MovieDetail from "./MovieDetail";
import MoviePopularList from "./MoviePopularList";

function MovieContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviePopularList />} />
        <Route path=":id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default MovieContent;
