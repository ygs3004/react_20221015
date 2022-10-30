import styled, { keyframes } from "styled-components";

function Modal({ title, content, setModalOn }) {
  return (
    <Block>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <BtnClose onClick={() => setModalOn(false)}>close</BtnClose>
    </Block>
  );
}

// 20px 올라오면서 투명상태에서 나타나는 효과
const slideUp = keyframes`
  from {
    transform: translateY(20px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Block = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  animation: ${slideUp} 0.4s, ${fadeIn} 0.5s;
`;

const Title = styled.h3`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Content = styled.p`
  padding: 10px;
`;

const BtnClose = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 4px;
  background: #ccc;
  font-weight: 700;
  color: #fff;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #bbb;
  }
`;

export default Modal;
