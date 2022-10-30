import { useCallback, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

function CarouselWrapper({ children }) {
  const [currIdx, setCurrIdx] = useState(0);

  const changeIdx = useCallback(
    (operator) => {
      if (currIdx + operator === -1 || currIdx + operator === 3) return;
      console.log(currIdx);
      setCurrIdx(currIdx + operator);
    },
    [currIdx]
  );

  return (
    <Block currIdx={currIdx}>
      <ul>{children}</ul>
      <Btn style={{ left: 20 }} onClick={() => changeIdx(-1)}>
        <FaAngleLeft color="#fff" />
      </Btn>
      <Btn style={{ right: 20 }} onClick={() => changeIdx(+1)}>
        <FaAngleRight color="#fff" />
      </Btn>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 300px;

  border: 3px solid red;
  overflow: hidden;

  position: relative;

  ul {
    display: flex;
    height: 100%;
    transition: 300ms;

    transform: translateX(${({ currIdx }) => -100 * currIdx}vw);
  }
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`;

export default CarouselWrapper;
