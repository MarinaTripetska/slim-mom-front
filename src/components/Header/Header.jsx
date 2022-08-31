import { useSelector } from 'react-redux';

import AuthNav from 'components/AuthNav';
import NotAuthNav from 'components/NotAuthNav';
import { authSelectors } from 'redux/app/auth';

import { HeaderStyled } from './Header.styled';

const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  return (
    <>
      <HeaderStyled>
        {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}

        {isUserLoggedIn && <AuthNav localPage={localPage} />}
      </HeaderStyled>

      {/* <PositionRoot id="menu-root" /> */}
    </>
  );
};

export default Header;
