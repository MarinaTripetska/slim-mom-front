import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

import { AuthNav } from 'components/AuthNav';
import { NotAuthNav } from 'components/NotAuthNav';

import { HeaderStyled } from './Header.styled';

export const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  return (
    <HeaderStyled>
      {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}
      {isUserLoggedIn && <AuthNav localPage={localPage} />}
    </HeaderStyled>
  );
};
