import styled from "styled-components";

function Title({ title }) {
  return <TitleText>{title}</TitleText>;
}

const TitleText = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
`;

export default Title;
