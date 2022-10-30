import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

function Scroll() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [imgTop, setImgTop] = useState(0);
  const [firstTop, setFirstTop] = useState(0);
  const [secondTop, setSecondTop] = useState(0);

  const handleScroll = () => {
    setScrollAmount(window.scrollY);
    setImgTop(imgRef.current.getBoundingClientRect().top);
    setFirstTop(firstRef.current.getBoundingClientRect().top);
    setSecondTop(secondRef.current.getBoundingClientRect().top);
  };

  const imgRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ overflow: "hidden", width: "50%", margin: "0 auto" }}>
      <h1>Scroll</h1>
      <ImgBox imgTop={imgTop} ref={imgRef} />
      {/* 800px 전까지는 안보이게 그 이후로 나타나게 */}
      <p
        style={{
          marginTop: 100,
          transform: `translateX(${-firstTop - 300}px)`,
        }}
        ref={firstRef}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, beatae
        officiis. Consequatur nemo at culpa quisquam quidem, quos et corporis
        tenetur sapiente, nihil officia inventore recusandae cum, nostrum maxime
        impedit facilis possimus. Esse ea, voluptatem sint voluptate quibusdam
        quis, architecto necessitatibus voluptatum distinctio eum ad fuga.
        Sapiente eos in libero?
      </p>
      <p
        style={{
          marginTop: 50,
          transform: `translateX(${secondTop + 300}px)`,
        }}
        ref={secondRef}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        error quis voluptas beatae libero amet totam minima! Beatae eveniet
        debitis numquam distinctio. Debitis quo nostrum labore quisquam eius nam
        minima! Commodi qui doloremque facilis sapiente quod, illo maxime eaque
        saepe amet. Placeat in molestias excepturi voluptatem repellat numquam.
        Totam, soluta!
      </p>
    </div>
  );
}

const ImgBox = styled.div`
  margin-top: 600px;
  height: 600px;
  background-color: #eee;
  border: 3px solid red;
  background: url(${require("../../assets/images/3.png")}) center top / cover
    no-repeat;
  // 스크롤 600px 이상 내려가면 동작하게(조건)
  ${({ imgTop }) => css`
    background-position: center ${imgTop > 0 ? "top" : imgTop}px;
  `}
`;

export default Scroll;
