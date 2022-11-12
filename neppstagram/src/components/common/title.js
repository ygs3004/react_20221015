import styled from "styled-components";

function Title({ title }) {
  return <Default>{title}</Default>;
}

const Default = styled.h2`
  font-size: 1.4rem;
  text-align: center;
`;

export default Title;
