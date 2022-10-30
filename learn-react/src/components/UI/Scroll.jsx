import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

function Scroll() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [firstTop, setFirstTop] = useState(0);

  const handleScroll = () => {
    setScrollAmount(window.scrollY);
    setFirstTop(firstRef.current.getBoundingClientRect().top);
  };

  const firstRef = useRef(null);

  console.log(firstTop);
  console.log(scrollAmount);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <h1>Scroll</h1>
        <ImgBox scrollAmount={scrollAmount} />
        {/* 800px 전까지는 안보이고 그 이후로 나타나게 */}
        <p
          style={{
            marginTop: 100,
            transfrom: `translateX(${-firstTop - 500}px)`,
          }}
          ref={firstRef}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit ex nobis quasi deleniti, officia quia ab excepturi dolor
          praesentium sapiente? Quidem aspernatur distinctio quaerat quod
          blanditiis perferendis, consequuntur iste ipsam.
        </p>
        <p style={{ marginTop: 50, transform: "translateX(100%)" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit ex nobis quasi deleniti, officia quia ab excepturi dolor
          praesentium sapiente? Quidem aspernatur distinctio quaerat quod
          blanditiis perferendis, consequuntur iste ipsam.
        </p>
      </div>
    </>
  );
}

const ImgBox = styled.div`
  margin-top: 200px;
  height: 600px;
  background-color: #eee;
  border: 3px solid red;
  background: url(${require("../../assets/images/1.jpg")}) center top / cover
    no-repeat;

  // 스크롤 600px 이상 내려가면 동일하게
  ${({ scrollAmount }) => css`
    background-position: center ${scrollAmount < 600 ? 0 : scrollAmount - 600}px;
  `}
`;

export default Scroll;
