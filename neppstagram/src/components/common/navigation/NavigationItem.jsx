import { Link } from "react-router-dom";
import styled from "styled-components";

function NavigationItem({ menu }) {
  return (
    <Block>
      <Link to={menu.path}>{menu.icon}</Link>
    </Block>
  );
}

const Block = styled.div`
  flex: 1;
  color: #aaa;

  & + & {
    border-left: 1px solid #bbb;
  }

  &:hover {
    background-color: #eee;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default NavigationItem;
