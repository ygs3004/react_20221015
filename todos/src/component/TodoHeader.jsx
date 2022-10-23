import styled from "styled-components";

function TodoHeader({ todos }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", { dateStyle: "full" });

  const total = todos.length;

  const count = todos.filter((todo) => todo.done).length;

  const percentage = total !== 0 ? Math.floor((count / total) * 100) : 0;

  return (
    <HeaderBlock>
      <DateText>{dateStr}</DateText>
      <CountText>
        완료 : {count}/{total}
      </CountText>
      <StatusBar percentage={percentage}>
        <Percentage>{percentage}%</Percentage>
      </StatusBar>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 30px 20px;
  border-bottom: 1px solid #e6e6e6;
`;

const DateText = styled.h2`
  font-size: 1.2rem;
`;

const CountText = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #bbb;
`;

const StatusBar = styled.div`
  // 레이아웃
  height: 12px;
  margin-top: 5px;

  // 백그라운드
  background-color: #bbb;
  border-radius: 10px;

  // 폰트
  font-size: 0.5rem;
  text-align: center;
  line-height: 12px;
  color: #fff;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main};

    position: absolute; // 상위 요소 포지션에 요소 적용
    left: 0;
    top: 0;

    transform-origin: left;
    transform: scaleX(${({ percentage }) => percentage}%);
    transition: 0.25s; // 줄어드는 속도
  }
`;

const Percentage = styled.span`
  position: relative; // positoin 값이 있어야 z-index 비교 가능
  z-index: 10;
`;

export default TodoHeader;
