import styled from "styled-components";

function ModalBg({ children }) {
  return <Block>{children}</Block>;
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default ModalBg;
