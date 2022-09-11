import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';
import { authOperations, authSelectors } from 'redux/app/auth';
import ChoiceModal from '../ChoiceModal';

import {
  Thumb,
  NavThumb,
  UserThumb,
  LogoutBtn,
  TabletNavigationThumb,
  NavLinkStyled,
  DesktopNavigationThumb,
  UserName,
  LogoStyled,
} from './AuthNav.styled';
import { useState } from 'react';
import NavMenuModal from 'components/NavMenuModal';
import ReactPortal from 'components/ReactPortal';
import Burger from 'components/Burger';
import useViewportDimensions from 'hooks/useViewportDimensions';
import MobileNavigationPanel from 'components/MobileNavigationPanel';

const AuthNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewportDimensions = useViewportDimensions();
  const isMobileView = viewportDimensions.width <= 767;

  const isDesktopView = viewportDimensions.width >= 1280;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const userName = useSelector(authSelectors.getUserName);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
    setIsShowChoiceModal(false);
  };

  return (
    <>
      <Thumb>
        <DesktopNavigationThumb>
          <LogoStyled>
            <Logo />
          </LogoStyled>

          {isDesktopView && (
            <NavThumb>
              <NavLinkStyled to="/diary">Щоденник</NavLinkStyled>
              <NavLinkStyled to="/calculator">Калькулятор</NavLinkStyled>
            </NavThumb>
          )}
        </DesktopNavigationThumb>

        <TabletNavigationThumb>
          {!isMobileView && (
            <UserThumb>
              <UserName>{userName}</UserName>
              <LogoutBtn
                type="button"
                onClick={() => setIsShowChoiceModal(true)}
              >
                Вихід
              </LogoutBtn>
            </UserThumb>
          )}

          {!isDesktopView && (
            <Burger handleOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
          )}
        </TabletNavigationThumb>
      </Thumb>

      {isMobileView && <MobileNavigationPanel />}

      {isShowChoiceModal && (
        <ReactPortal wrapperId="confirmation-modal">
          <ChoiceModal
            text={'що хочете вийти зі свого облікового запису'}
            choiceHandler={choiceHandler}
          />
        </ReactPortal>
      )}

      {isOpenMenu && (
        <ReactPortal wrapperId="nav-menu-modal">
          <NavMenuModal handleMenuOpen={setIsOpenMenu} />
        </ReactPortal>
      )}
    </>
  );
};

export default AuthNav;
