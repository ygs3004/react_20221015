import styled from "styled-components";
import NavigationItem from "./NavigationItem";
import { FaHome } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsSearch,
  BsFillSuitHeartFill,
} from "react-icons/bs";

const navigation = [
  {
    id: 1,
    path: "/post",
    icon: <FaHome />,
  },
  {
    id: 2,
    path: "/edit",
    icon: <BsSearch />,
  },
  {
    id: 3,
    path: "like",
    icon: <BsFillSuitHeartFill />,
  },
  {
    id: 4,
    path: "/profile",
    icon: <BsFillPersonFill />,
  },
];

function Navigation() {
  return (
    <Block>
      {navigation.map((menu) => (
        <NavigationItem menu={menu} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  height: 40px;

  background-color: #fff;

  border-top: 1px solid #bbb;
`;

export default Navigation;
