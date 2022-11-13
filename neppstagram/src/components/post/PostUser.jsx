import styled from "styled-components";

function PostUser() {
  return (
    <Block>
      <ImgCircle>
        <img
          src="https://w.namu.la/s/c2ccec729ca7140681f80154b2271ef78bb0ba2c192390ae3dd39e06cfd7b2e3d891e950eeb63f0aef4e25461528cf1db7be8df22c3cf1680de0bd50b6c27c9728944c2d6ef231a763d0c4da09e693269e89c9ff50560f5fa677b54a19f2fc87"
          alt="예지"
        />
      </ImgCircle>
      예지
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
  margin-right: 10px;

  border-radius: 50%;
  overflow: hidden;

  img {
    height: 150%;
  }
`;

export default PostUser;
