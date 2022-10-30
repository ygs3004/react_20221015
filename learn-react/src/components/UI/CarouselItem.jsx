import styled from "styled-components";
import cat from "../../assets/images/1.jpg";

function CarouselItem({ slide }) {
  const { id, url } = slide;

  return (
    <Block>
      <img src={cat} alt="하이" />
    </Block>
  );
}

const Block = styled.li`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
  /* 플렉스 컨테이너 요소의 공간이 부족할때 아이템을 줄이는 비율 */
`;

export default CarouselItem;
