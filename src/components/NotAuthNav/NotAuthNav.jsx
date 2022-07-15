import Logo from 'components/Logo';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavThumb } from './NotAuthNav.styled';

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

  //   if (windowSize >= 769) {
  //     return (
  //       <>
  //               {/* <Logo /> */}
  //       </>
  //     );
  //   }

  if (localPage === 'login' || localPage === 'register') {
    return (
      <>
        <Logo />
      </>
    );
  }

  return (
    <>
      <Logo />
      <NavThumb>
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/register">Registration</NavLink>
      </NavThumb>
    </>
  );
};

export default NotAuthNav;
