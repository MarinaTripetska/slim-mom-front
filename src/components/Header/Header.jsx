import AuthNav from 'components/AuthNav';
import NotAuthNav from 'components/NotAuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import { HeaderStyled } from './Header.styled';

const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  let PosAb = {};
  if ((localPage = 'CalculatorPage')) {
    PosAb = { position: 'absolute' };
  }

  return (
<<<<<<< HEAD
    <>
    <HeaderStyled>
=======
    <HeaderStyled style={PosAb}>
>>>>>>> 0e8a5de8493d1815c34eb779ac83d80f4df8f9a3
      {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}

      {isUserLoggedIn && <AuthNav localPage={localPage} />}
    </HeaderStyled>
      <div id="menu-root"></div>
    </>
  );
};

export default Header;
