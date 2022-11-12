import styled from "styled-components";

function PostImgBox() {
  return (
    <Block>
      <ImgList>
        <li>
          <img src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202209/27/joongang/20220927100034715ainn.jpg" />
        </li>
      </ImgList>
    </Block>
  );
}

const Block = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ImgList = styled.ul`
  display: flex;
  li {
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

export default PostImgBox;
