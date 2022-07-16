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
  SlimStyleForLogin,
} from './Header.styled';
import {
  NavStyleDesktop,
  BurgerPositionDesktop,
  NavLinkStyleDesktop,
} from '../BurgerMenu/BurgerMenu.styled';
import logoMobile from '../../assets/images/logo-mobile.png';
import BurgerMenuIcon from '../../assets/images/burger.png';
import CloseMenuIcon from '../../assets/images/close.png';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/app/auth';
import BurgerMenu from '../BurgerMenu';

import { UserInfoMenuLapTop } from 'components/UserInfoMenu';
import { UserInfoMenuMobile } from '../UserInfoMenu';
import { NavLink } from 'react-router-dom';

// const ClearHeader = () => {
//   return (
//     <>
//       <NavPosition>
//         <Home to="/">
//           <ImgPosition src={logoMobile} alt="logo-mobile" />
//           <SlimStyle>
//             Slim <MomStyle>Mom</MomStyle>
//           </SlimStyle>
//         </Home>
//       </NavPosition>
//     </>
//   );
// };

const HeaderRegistrUser = () => {
  const LoginRegistr = () => {
    return (
      <LoginRegistrPosition>
        <LoginRegistrStyle to="/login">sign in</LoginRegistrStyle>
        <LoginRegistrStyle to="/register">registration</LoginRegistrStyle>
      </LoginRegistrPosition>
    );
  };
  return (
    <NavPositionLog>
      <PositionSlimMomLog>
        <Home to="/">
          <ImgPosition src={logoMobile} alt="logo-mobile" />
          <SlimStyle>
            Slim <MomStyle>Mom</MomStyle>
          </SlimStyle>
        </Home>
      </PositionSlimMomLog>
      <LoginRegistr />
    </NavPositionLog>
  );
};

const ShowMenuDesktop = () => {
  return (
    <NavStyleDesktop>
      <BurgerPositionDesktop>
        <NavLinkStyleDesktop>
          <NavLink to="/diary">diary</NavLink>
        </NavLinkStyleDesktop>
        <NavLinkStyleDesktop>
          <NavLink to="/calculator">calculator</NavLink>
        </NavLinkStyleDesktop>
      </BurgerPositionDesktop>
    </NavStyleDesktop>
  );
};

const HeaderLoginUser = ({ register }) => {
  const [userLogIn, setUserLogIn] = useState(true);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1279);
  const userName = useSelector(authSelectors.getUserName);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

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
              <ImgPosition src={logoMobile} alt="logo-mobile" />
              <SlimStyleForLogin>
                Slim <MomStyle>Mom</MomStyle>
              </SlimStyleForLogin>
            </Home>
          </PositionSlimMomLog>
          {isDesktop ? <ShowMenuDesktop /> : null}
          <UserInfoMenuLapTop userName={userName} />
          <CloseMenu />
        </NavPositionLog>
        <UserInfoMenuMobile userName={userName} />
        <BurgerMenu
          openBurgerMenu={openBurgerMenu}
          setOpenBurgerMenu={setOpenBurgerMenu}
        />
      </div>
    );
  }

  return <HeaderRegistrUser />;
};

export { HeaderLoginUser };
