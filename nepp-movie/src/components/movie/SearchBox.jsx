import { useEffect } from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { getSearch } from "../../utils/movie_api";
import InputBox from "./InputBox";
import { BsPerson } from "react-icons/bs";
import { BiMoviePlay, BiTv } from "react-icons/bi";
import { useRef } from "react";

const Icons = {
  person: <BsPerson />,
  tv: <BiTv />,
  movie: <BiMoviePlay />,
};

function SearchBox() {
  const [timer, setTimer] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const isShow = isFocus && result.length > 0;

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleFocus = (bool) => {
    setTimeout(() => {
      setIsFocus(bool);
    }, 100);
  };

  useEffect(() => {
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        if (keyword.length === 0) {
          setResult([]);
          return;
        }
        getSearch(keyword).then((res) => setResult(res.data.results));
      }, 500)
    );
  }, [keyword]);

  return (
    <SearchBlock>
      <InputBox onChange={handleInput} handleFocus={handleFocus}>
        <BiSearch />
      </InputBox>
      {isShow && (
        <ResultList>
          {result.map((item) => (
            <ResultItem>
              <Link to={item.media_type + "/" + item.id}>
                {Icons[item.media_type]}
                {item.name || item.title}
              </Link>
            </ResultItem>
          ))}
        </ResultList>
      )}
    </SearchBlock>
  );
}

const SearchBlock = styled.div`
  position: relative;
`;

const ResultList = styled.ul`
  border: 1px solid black;
  position: absolute;
  max-height: 300px;

  top: calc(100%+10px);
  left: 0;
  border-radius: 4px;
  overflow-y: scroll;
  transition: max-height 0.25s, border-color 0s 0s;

  ${({ isShow }) =>
    isShow &&
    css`
      max-height: 0;
      overflow: hidden;
      border-color: transparent;
      transition: max-height 0s;
    `}
`;

const ResultItem = styled.li`
  background-color: #fff;

  & + & {
    border-top: 1px solid #000;
  }

  a {
    display: block;
    height: 100%;
    padding: 10px 5px;

    &:hover {
      background-color: #eee;
    }
  }
`;

export default SearchBox;
