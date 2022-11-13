import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

function PostImgBox({ imgUrls }) {
  console.log(imgUrls);

  const [idx, setIdx] = useState(0);

  const handleIdx = (operator) => {
    if (operator === -1) {
      if (idx > 0) setIdx(idx + operator);
    } else {
      if (idx + operator <= imgUrls.length - 1) setIdx(idx + operator);
    }
  };

  return (
    <Block>
      <ImgList idx={idx}>
        {imgUrls.map((url) => (
          <li>
            <img src={url} alt="as" />
          </li>
        ))}
      </ImgList>
      <Btn onClick={() => handleIdx(-1)}>
        <FaAngleLeft color="rgba(255,255,255,0.3)" />
      </Btn>
      <Btn onClick={() => handleIdx(1)}>
        <FaAngleRight color="rgba(255,255,255,0.3)" />
      </Btn>
    </Block>
  );
}

const Block = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const ImgList = styled.ul`
  display: flex;
  height: 100%;
  transition: transform 0.25s;
  transform: translate(${({ idx }) => idx * -200}px);
  li {
    display: flex;
    justify-content: center;
    width: 200px;
    flex-shrink: 0;
    img {
      width: 100%;
    }
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  outline: none;

  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:nth-of-type(1) {
    left: 5px;
  }

  &:nth-of-type(2) {
    right: 5px;
  }
`;

export default PostImgBox;
