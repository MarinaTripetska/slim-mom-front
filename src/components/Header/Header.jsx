import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

import { AuthNav } from 'components/AuthNav';
import { NotAuthNav } from 'components/NotAuthNav';

export const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}
      {isUserLoggedIn && <AuthNav localPage={localPage} />}
    </header>
  );
};
