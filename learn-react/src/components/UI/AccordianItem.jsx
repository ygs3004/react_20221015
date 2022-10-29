import styled, { css } from "styled-components";
import { FaAngleDown } from "react-icons/fa";

function AccordianItem({ menu }) {
  const { name, content } = menu;

  return (
    <Block>
      <MenuNameBox>
        <h3>{name}</h3>
        <FaAngleDown />
      </MenuNameBox>
      <MenuContent active={true}>{content}</MenuContent>
    </Block>
  );
}

const Block = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px;
`;

const MenuNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuContent = styled.p`
  max-height: 0;
  overflow: hidden;
  transition: 400ms;

  ${({ active }) =>
    active &&
    css`
      max-height: 100px;
    `}
`;

export default AccordianItem;
