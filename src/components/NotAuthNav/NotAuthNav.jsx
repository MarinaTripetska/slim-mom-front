import Logo from 'components/Logo';
import { size } from '../../assets/sizes';

import { Thumb, NavThumb, NavLinkStyled } from './NotAuthNav.styled';
import useViewportDimensions from 'hooks/useViewportDimensions';

const NotAuthNav = ({ localPage }) => {
  const viewportDimensions = useViewportDimensions();

  if (
    (localPage === 'LoginPage' || localPage === 'RegistrationPage') &
    (viewportDimensions.width > parseInt(size.maxTablet, 10))
  ) {
    return (
      <>
        <Logo />
      </>
    );
  }
  return (
    <Thumb>
      <Logo />

      <NavThumb>
        <NavLinkStyled to="/login">Увійти</NavLinkStyled>
        <NavLinkStyled to="/register">Зареєструватися</NavLinkStyled>
      </NavThumb>
    </Thumb>
  );
};

export default NotAuthNav;
