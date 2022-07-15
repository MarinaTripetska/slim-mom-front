import { useState, useEffect } from 'react';
import {
  NavPosition,
  Home,
  ImgPosition,
  SlimStyle,
  MomStyle,
  ButtonBurger,
  LoginRegistrStyle,
  LoginRegistrPosition,
  NavPositionLog,
  PositionSlimMomLog,
  SlimStyleForLogin
} from './Header.styled';
import logoMobile from '../../assets/images/logo-mobile.png';
import BurgerMenuIcon from '../../assets/images/burger.png';
import CloseMenuIcon from '../../assets/images/close.png';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/app/auth';
import BurgerMenu from '../BurgerMenu';

import { UserInfoMenuLapTop } from 'components/UserInfoMenu';
import { UserInfoMenuMobile } from '../UserInfoMenu';
import { NavLink } from 'react-router-dom';
// import Logo from '../Logo';

const ClearHeader = () => {
  return (
    <div>
      <NavPosition>
        <Home to="/">
          <ImgPosition
            src={logoMobile}
            alt="logo-mobile"
          />
          <SlimStyle>
            Slim <MomStyle>Mom</MomStyle>
          </SlimStyle>
        </Home>
      </NavPosition>
    </div>
  )
};

const HeaderRegistrUser = () => {
  const LoginRegistr = () => {
    return (
      <LoginRegistrPosition>
        <LoginRegistrStyle to='/login'>
          sign in
        </LoginRegistrStyle>
        <LoginRegistrStyle to='/register'>
          registration
          </LoginRegistrStyle>
      </LoginRegistrPosition>
    )
  }
  return (
    <NavPositionLog>
      <PositionSlimMomLog>
        <Home to="/">
          <ImgPosition
            src={logoMobile}
            alt="logo-mobile"
          />
          <SlimStyle>
            Slim <MomStyle>Mom</MomStyle>
          </SlimStyle>
      </Home>
      </PositionSlimMomLog>
        <LoginRegistr/>
      </NavPositionLog>
  );
};

const HeaderLoginUser = ({register, logout, userName}) => {
  const [userLogIn, setUserLogIn] = useState(true);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const qwe = useSelector(authSelectors.getUserName);
  console.log(qwe);

  const CloseMenu = () => {
    const HandleClickOpen = e => {
    e.preventDefault();
    setOpenBurgerMenu(true);
    return;
  };

  const HandleClickClose = e => {
    e.preventDefault();
    setOpenBurgerMenu(false);
    return;
  };
    if (openBurgerMenu) {
      return (
        <ButtonBurger onClick={HandleClickClose}>
          <img src={CloseMenuIcon} alt="CloseMenuIcon" />
        </ButtonBurger>
      );
      }
    return (
      <ButtonBurger onClick={HandleClickOpen}>
        <img src={BurgerMenuIcon} alt="BurgerMenuIcon" />
      </ButtonBurger>
    );
  };
  
  if (userLogIn) {
    return (
      <div>
        <NavPositionLog>
          <PositionSlimMomLog>
            <Home to="/">
              <ImgPosition
                src={logoMobile}
                alt="logo-mobile"
              />
              <SlimStyleForLogin>
                Slim <MomStyle>Mom</MomStyle>
              </SlimStyleForLogin>
            </Home>
          </PositionSlimMomLog>
          <UserInfoMenuLapTop logout={logout} userName={userName} />
          <CloseMenu/>
        </NavPositionLog>
        <UserInfoMenuMobile logout={logout} userName={userName} />
        <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={setOpenBurgerMenu} />
      </div>)
  };
  return (
        <HeaderRegistrUser/>
      );
}

export {ClearHeader, HeaderRegistrUser, HeaderLoginUser};
