import { NavPosition, Home, ImgPosition, SlimStyle, MomStyle, ButtonBurger } from './Header.styled';
import logoMobile from '../../images/logo-mobile.png';
import BurgerMenuIcon from '../../images/burger.png';
import CloseMenuIcon from '../../images/close.png';

const HeaderPosition = ({ openBurgerMenu, setOpenBurgerMenu, Logo, UserInfo, Navigation, SignIn, Registration }) => {
  
  const HandleClickOpen = (e) => {
    e.preventDefault();
    setOpenBurgerMenu(true);
    return;
  }

    const HandleClickClose = (e) => {
    e.preventDefault();
    setOpenBurgerMenu(false);
    return;
  }

  const CloseMenu = () => {
    if (openBurgerMenu) {
      return(
      <ButtonBurger onClick={HandleClickClose}>
        <img src={CloseMenuIcon} alt="CloseMenuIcon" />
      </ButtonBurger>
      )
    }
        return (
      <ButtonBurger onClick={HandleClickOpen}>
        <img src={BurgerMenuIcon} alt="BurgerMenuIcon" />
      </ButtonBurger>
    )
  }

  return (
    <div>
      <NavPosition>
        <Home href="../home">
          <ImgPosition src={logoMobile} alt="logo-mobile" width={46} height={44} />
          <SlimStyle>Slim <MomStyle>Mom</MomStyle></SlimStyle>
        </Home>
        <CloseMenu/>
      </NavPosition>
    </div>
  )
};

export default HeaderPosition;