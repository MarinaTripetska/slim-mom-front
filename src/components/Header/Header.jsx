import AuthNav from 'components/AuthNav';
import NotAuthNav from 'components/NotAuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  return (
    <>
      {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}

      {isUserLoggedIn && <AuthNav localPage={localPage} />}
    </>
  );
};

export default Header;
