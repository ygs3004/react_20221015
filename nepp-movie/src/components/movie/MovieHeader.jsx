import styled from "styled-components";
import MovieNav from "./MovieNav";
import SearchBar from "./SearchBar";

function MovieHeader() {
  return (
    <HeaderBlock>
      <Logo>Nepp Movie</Logo>
      <MovieNav />
      <SearchBar />
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
