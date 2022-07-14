import { useState , useEffect} from 'react';
import {
  NavPosition,
  Home,
  ImgPosition,
  SlimStyle,
  MomStyle,
  ButtonBurger,
} from './Header.styled';
import { UserInfoMenuLapTop } from 'components/UserInfoMenu';
import { UserAuthenticate } from '../UserInfoMenu';
import logoMobile from '../../assets/images/logo-mobile.png';
import BurgerMenuIcon from '../../assets/images/burger.png';
import CloseMenuIcon from '../../assets/images/close.png';
// import Logo from '../Logo';

const HeaderPosition = ({
  openBurgerMenu,
  setOpenBurgerMenu,
}) => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  const [userLogIn, setUserLogIn] = useState(false);

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

  const updateMedia = () => {
        setDesktop(window.innerWidth > 767);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

  const CloseMenu = () => {
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

  const LogoShow = () => {
    if (userLogIn) {
      return (
      <SlimStyle>
        Slim <MomStyle>Mom</MomStyle>
      </SlimStyle>
    )
    }
    return null;
  }
  return (
    <div>
      <NavPosition>
        {/* <Logo/> */}
        <Home href="../home">
          <ImgPosition
            src={logoMobile}
            alt="logo-mobile"
            width={46}
            height={44}
          />
          {!isDesktop ? (<LogoShow />) : (<SlimStyle>
            Slim <MomStyle>Mom</MomStyle>
            </SlimStyle>)}
        </Home>
        {isDesktop ? (<UserInfoMenuLapTop/>) : (null)}
        {userLogIn ? (<CloseMenu />) : (<UserAuthenticate/>)}
      </NavPosition>
    </div>
  );
};

export default HeaderPosition;
