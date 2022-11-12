import styled from "styled-components";

function PostUser() {
  return (
    <Block>
      <ImgCircle>
        <img
          src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202209/27/joongang/20220927100034715ainn.jpg"
          alt="사진"
        />
      </ImgCircle>
      사람
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 0.8rem;
`;

const ImgCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 200%;
  }
`;

export default PostUser;
