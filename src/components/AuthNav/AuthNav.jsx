import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';
import { authOperations, authSelectors } from 'redux/app/auth';
// import BurgerMenuIcon from 'assets/images/burger.png';
// import CloseMenuIcon from 'assets/images/close.png';
import ChoiceModal from '../ChoiceModal';

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
  // ButtonBurger,
} from './AuthNav.styled';
import { useState } from 'react';
import NavMenuModal from 'components/NavMenuModal';
import ReactPortal from 'components/ReactPortal';
import Burger from 'components/Burger';

const AuthNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const userName = useSelector(authSelectors.getUserName);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
  };
  const closeModalHandle = () => {
    setIsShowChoiceModal(false);
  };

  return (
    <AuthNavStyled>
      {isShowChoiceModal && (
        <ChoiceModal
          text={'що хочете вийти зі свого облікового запису'}
          choiceHandler={choiceHandler}
          closeModalHandle={closeModalHandle}
        />
      )}

      <DivHeader>
        <Logostyled>
          <Logo />
          <VerticalDeskTop />
          <NavThumb>
            <NavLinkStyleMenu to="/diary">Щоденник</NavLinkStyleMenu>
            <NavLinkStyleMenu to="/calculator">Калькулятор</NavLinkStyleMenu>
          </NavThumb>
        </Logostyled>

        <Userstyled>
          <UserThumb>
            <UserNameStyle>{userName}</UserNameStyle>
            <Vertical />
            <ExitBtn type="button" onClick={() => setIsShowChoiceModal(true)}>
              Вихід
            </ExitBtn>
          </UserThumb>
          <Burger handleOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        </Userstyled>
      </DivHeader>

      {isOpenMenu && (
        <ReactPortal wrapperId="nav-menu-modal">
          <NavMenuModal handleMenuOpen={setIsOpenMenu} />
        </ReactPortal>
      )}
    </AuthNavStyled>
  );
};

export default AuthNav;
