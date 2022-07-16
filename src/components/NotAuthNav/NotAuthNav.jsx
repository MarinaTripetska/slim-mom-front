import Logo from 'components/Logo';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NotAuthNavStyled, NavThumb } from './NotAuthNav.styled';

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

  if (localPage === 'LoginPage' || localPage === 'RegistrationPage') {
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
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/register">Registration</NavLink>
      </NavThumb>
    </NotAuthNavStyled>
  );
};

export default NotAuthNav;
