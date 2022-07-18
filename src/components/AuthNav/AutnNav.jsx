import Logo from 'components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/app/auth';
import BurgerMenuIcon from 'assets/images/burger.png';
import CloseMenuIcon from 'assets/images/close.png';
import { createPortal } from 'react-dom';
import {
  AuthNavStyled,
  DivHeader,
  NavThumb,
  UserThumb,
  Logostyled,
  Userstyled,
  UserNameStyle,
  ExitBtn,
  Vertical,
  VerticalDeskTop,
  NavLinkStyleMenu,
  ButtonBurger,
  NavThumbOpen,
  NavLinkStyleMenuOpen,
} from './AuthNav.styled';
import { useState } from 'react';

const AuthNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const userName = useSelector(authSelectors.getUserName);

  const handleLogout = () => {
    dispatch(authOperations.actionLogout()).then(() => {
      navigate('/login', { replace: true });
    });
  };

  const UserMenuOpen = () => {
    const MenuRoot = document.querySelector('#menu-root');
    if (openMenu) {
      const ScrollVisible = () => { document.body.style.overflow = "visible" };
      return createPortal((
        <NavThumbOpen>
          <NavLinkStyleMenuOpen to="/diary" onClick={()=> {setOpenMenu(false); ScrollVisible()}}> Diary</NavLinkStyleMenuOpen>
          <NavLinkStyleMenuOpen to="/calculator" onClick={() => { setOpenMenu(false); ScrollVisible()}}>Calculator</NavLinkStyleMenuOpen>
        </NavThumbOpen>
      ), MenuRoot)
    };
    return null;
  };

  const UserMenu = () => {
    return (
      <NavThumb>
        <NavLinkStyleMenu to="/diary">Diary</NavLinkStyleMenu>
        <NavLinkStyleMenu to="/calculator">Calculator</NavLinkStyleMenu>
      </NavThumb>
    );
  };

  const CloseMenu = () => {
    const HandleClickOpen = (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    setOpenMenu(true);
    return;
  }

    const HandleClickClose = (e) => {
      e.preventDefault();
      document.body.style.overflow = "visible" 
    setOpenMenu(false);
    return;
  }
    if (openMenu) {
      return (
        <ButtonBurger onClick={HandleClickClose} style={{marginRight: "4px"}} >
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
    <AuthNavStyled>
      <DivHeader>
        <Logostyled>
          <Logo />
          <VerticalDeskTop />
          <UserMenu />
        </Logostyled>
        <Userstyled>
          <UserThumb>
            <UserNameStyle>{userName}</UserNameStyle>
            <Vertical />
            <ExitBtn type="button" onClick={handleLogout}>
              Exit
            </ExitBtn>
          </UserThumb>
          <CloseMenu />
        </Userstyled>
      </DivHeader>
      {/* <DivNic>
        <UserThumb>
          <span>{userName}</span>
          <button type="button" onClick={handleLogout}>
            Exit
          </button>
        </UserThumb>
      </DivNic> */}
      <UserMenuOpen />
    </AuthNavStyled>
  );
};

export default AuthNav;
