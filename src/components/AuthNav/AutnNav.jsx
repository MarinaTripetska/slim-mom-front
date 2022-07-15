import Logo from 'components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/app/auth';

const AuthNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(authSelectors.getUserName);

  const handleLogout = () => {
    dispatch(authOperations.actionLogout()).then(() => {
      navigate('/login', { replace: true });
    });
  };

  return (
    <>
      <Logo />
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <span>{userName}</span>
      <button type="button" onClick={handleLogout}>
        Exit
      </button>
    </>
  );
};

export default AuthNav;
