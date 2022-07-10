// import { useEffect } from 'react';
import styled from 'styled-components';
import logoMobile from '../images/logo-mobile.png';
import Logo from './Logo';
// import BurgerMenu from '../images/burger.png';
import Close from '../images/close.png';

const NavPosition = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: stretch;
  align-content: space-between;
  justify-content: space-between;
`;

const Home = styled.a`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  padding-top: 12px;
  padding-left: 20px;
`;
const MomStyle = styled.span`
  color: #fc842d;
`;

const ButtonBurger = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const SlimStyle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.04em;
  padding-top: 12px;
  padding-left: 8px;
`;

const ImgPosition = styled.img`
  margin-top: 8px;
`;

const Header = () => {
  return (
    <NavPosition>
      <Home href="../home">
        {/* <ImgPosition src={logoMobile} alt="logo-mobile" width={46} height={44} />
                <SlimStyle>Slim <MomStyle>Mom</MomStyle></SlimStyle> */}
        <Logo />
      </Home>
      <ButtonBurger>
        <img src={Close} alt="BurgerMenu" />
      </ButtonBurger>
    </NavPosition>
  );
};

export default Header;
