import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const navList = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Movie",
    url: "movie",
  },
  {
    id: 3,
    text: "TV",
    url: "tv",
  },
];

function MovieNav() {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];

  return (
    <NavBlock>
      <ul>
        {navList.map((menu) => (
          <NavItem key={menu.id} menu={menu} active={url === menu.url} />
        ))}
      </ul>
    </NavBlock>
  );
}

const NavBlock = styled.div`
  margin: 0 40px;
  ul {
    display: flex;
  }
`;

function NavItem({ menu, active }) {
  const { text, url } = menu;

  return (
    <ItemBlock active={active}>
      <Link to={url}>{text}</Link>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  & + & {
    margin-left: 10px;
  }

  font-weight: ${({ active }) => active && 700};
`;

export default MovieNav;
