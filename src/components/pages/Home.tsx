import styled from "styled-components";
import homeBg from "../../assets/reactif_dev.jpg";
import logo from "../../assets/logo-creactif.png";

interface Props {
  bg: string;
}

export default function Home() {

  return (
    <HomeStyled bg={homeBg}>
      <header className="header-container">
        <h1 className="logo">
          <img src={logo} alt="logo reactif" width="250px"/>
        </h1>
      </header>
    </HomeStyled>
  );
}

const HomeStyled = styled.div<Props>`
  width: 100%;
  height: 100vh;
  .header-container {
    display: flex;
    height:120px;
    justify-content: space-between;
    background-color:blue;
    .logo {
      padding-left:20px;
    }
  }
`;
