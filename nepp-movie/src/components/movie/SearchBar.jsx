import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <BarBlock>
      <SearchInput type="text" />
      <BiSearch />
    </BarBlock>
  );
}

const BarBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  min-width: 140px;
  flex: 1;

  padding: 10px;
  margin-left: 50px;
  border: 1px solid black;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export default SearchBar;
