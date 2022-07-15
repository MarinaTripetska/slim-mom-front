import Logo from 'components/Logo';
import { NavLink } from 'react-router-dom';

const NotAuthNav = () => {
  return (
    <>
      <Logo />
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </>
  );
};

export default NotAuthNav;
