import Logo from 'components/Logo';
import { useEffect, useState } from 'react';
import { NotAuthNavStyled, NavThumb, NavLinkStyle } from './NotAuthNav.styled';
import { size } from '../../assets/sizes';

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
    (windowSize.innerWidth > parseInt(size.maxDesktop, 10))
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
