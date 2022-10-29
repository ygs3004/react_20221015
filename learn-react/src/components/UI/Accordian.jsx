import styled from "styled-components";
import AccordianItem from "./AccordianItem";

const menuList = [
  {
    id: 1,
    name: "react",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quis!",
  },
  {
    id: 2,
    name: "react accordian",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi. Distinctio, maiores! Rem asperiores, voluptatum ratione cumque natus incidunt saepe ex placeat praesentium aliquam consectetur deleniti expedita iusto, nihil hic!",
  },
  {
    id: 3,
    name: "reactui",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis, deserunt facilis facere eveniet nesciunt earum expedita. Repudiandae sed libero, eius quidem corrupti voluptatum expedita tenetur reprehenderit iste, optio deleniti animi autem itaque porro sit, magnam magni dignissimos repellat ratione. Provident iste illo earum temporibus modi, quis ullam sunt unde.",
  },
];

function Accordian() {
  return (
    <Block>
      <h1>Accordian</h1>
      <ul>
        {menuList.map((menu) => (
          <AccordianItem key={menu.id} menu={menu}></AccordianItem>
        ))}
      </ul>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 20px;
  background: #f7f7f7;

  ul {
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 500px;
  }
`;

export default Accordian;
