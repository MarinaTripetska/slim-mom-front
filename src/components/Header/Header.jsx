import { useState , useEffect} from 'react';
import {
  NavPosition,
  Home,
  ImgPosition,
  SlimStyle,
  MomStyle,
  ButtonBurger,
} from './Header.styled';
import {UserInfoMenuLapTop} from 'components/UserInfoMenu';
import logoMobile from '../../assets/images/logo-mobile.png';
import BurgerMenuIcon from '../../assets/images/burger.png';
import CloseMenuIcon from '../../assets/images/close.png';
// import Logo from '../Logo';

const HeaderPosition = ({
  openBurgerMenu,
  setOpenBurgerMenu,
}) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

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
          <SlimStyle>
            Slim <MomStyle>Mom</MomStyle>
          </SlimStyle>
        </Home>
        {isDesktop ? (<UserInfoMenuLapTop/>) : (null)}
        <CloseMenu />
      </NavPosition>
    </div>
  );
};

export default HeaderPosition;
