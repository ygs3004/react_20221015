import styled, { css } from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function AccordianItem({ menu }) {
  const { name, content } = menu;

  const [active, setActive] = useState(false);

  const onToggle = () => {
    setActive(!active);
  };

  return (
    <Block>
      <MenuNameBox>
        <h3>{name}</h3>
        <IconBox active={active}>
          <FaAngleDown cursor="pointer" onClick={onToggle} />
        </IconBox>
      </MenuNameBox>
      <MenuContent active={active}>{content}</MenuContent>
    </Block>
  );
}

const Block = styled.li`
  list-style: none;

  border-bottom: 1px;
`;

const MenuNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  border-top: 1px solid #eee;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  transition: 400ms;
  transform: rotate(${({ active }) => (active ? -180 : 0)}deg);
`;

const MenuContent = styled.p`
  max-height: ${({ active }) => (active ? 200 : 0)}px;
  margin: 10px 0;
  padding: 0 10px;
  overflow: hidden;

  transition: 400ms;

  /* ${({ active }) =>
    active &&
    css`
      max-height: 300px;
    `} */
`;

export default AccordianItem;
