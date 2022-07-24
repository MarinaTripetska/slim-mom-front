import { useEffect, useState } from 'react';

import Logo from 'components/Logo';
import { size } from '../../assets/sizes';

import { NotAuthNavStyled, NavThumb, NavLinkStyle } from './NotAuthNav.styled';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const NotAuthNav = ({ localPage }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  if (
    (localPage === 'LoginPage' || localPage === 'RegistrationPage') &
    (windowSize.innerWidth > parseInt(size.maxTablet, 10))
  ) {
    return (
      <>
        <Logo />
      </>
    );
  }
  return (
    <NotAuthNavStyled>
      <Logo />
      <NavThumb>
        <NavLinkStyle to="/login">Увійти</NavLinkStyle>
        <NavLinkStyle to="/register">Зареєструватися</NavLinkStyle>
      </NavThumb>
    </NotAuthNavStyled>
  );
};

export default NotAuthNav;
