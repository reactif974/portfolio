import styled from "styled-components"
import homeBg from "../../assets/reactif_dev.jpg"
import logo from "../../assets/logo-creactif.png"
import {FaHamburger} from "react-icons/fa"

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
        <div className="navigation-icon">
          <FaHamburger />
        </div>
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
    align-items: center;
    padding-right: 20px;
    .logo {
      padding-left:20px;
    }
    .navigation-icon {
      font-size:30px;
      &::before {
        content:"MENU";
        position:absolute;
        font-size: 0.6em;
        top:48px;
        right:60px;
      }
    }
  }
`;
