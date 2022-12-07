import styled from "styled-components";
import homeBg from "../../assets/reactif_dev.jpg";

interface Props {
  bg: string;
}

export default function Home() {
  return <HomeStyled bg={homeBg}>Home</HomeStyled>;
}

const HomeStyled = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(15, 17, 19, 1),
      rgba(62, 63, 112, 0.7),
      rgba(15, 17, 19, 1)
    ),
    url(${(props) => props.bg}) no-repeat;
  background-position: center;
  background-size: cover;
`;
