import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import MovieNav from "./MovieNav";
import InputBox from "./InputBox";
import { useState } from "react";
import { useEffect } from "react";
import { getSearch } from "../../utils/movie_api";
import SearchBox from "./SearchBox";

function MovieHeader() {
  return (
    <HeaderBlock>
      <Logo>Nepp Movie</Logo>
      <MovieNav />
      <SearchBox />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  padding: 25px 100px;

  border-bottom: 1px solid gray;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export default MovieHeader;
