import Logo from 'components/Logo';
import { size } from '../../assets/sizes';

import { Thumb, NavThumb, NavLinkStyled, LogoThumb } from './NotAuthNav.styled';
import useViewportDimensions from 'hooks/useViewportDimensions';

const NotAuthNav = ({ localPage }) => {
  const viewportDimensions = useViewportDimensions();
  const isStartPage = localPage === 'MainPage';
  const isDesktopView = viewportDimensions.width > parseInt(size.maxTablet, 10);

  return (
    <Thumb>
      {!isStartPage & isDesktopView ? (
        <Logo />
      ) : (
        <>
          <LogoThumb showVerticalLine={isStartPage & isDesktopView}>
            <Logo />
          </LogoThumb>

          <NavThumb>
            <NavLinkStyled to="/login">Увійти</NavLinkStyled>
            <NavLinkStyled to="/register">Зареєструватися</NavLinkStyled>
          </NavThumb>
        </>
      )}
    </Thumb>
  );
};

export default NotAuthNav;
