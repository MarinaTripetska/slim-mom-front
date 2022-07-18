import AuthNav from 'components/AuthNav';
import NotAuthNav from 'components/NotAuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import { HeaderStyled, PositionRoot } from './Header.styled';

const Header = ({ localPage }) => {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  let PosAb = {};
  if ((localPage = 'CalculatorPage')) {
    PosAb = { position: 'absolute' };
  }

  return (
    <>
    <HeaderStyled style={PosAb}>
      {!isUserLoggedIn && <NotAuthNav localPage={localPage} />}

      {isUserLoggedIn && <AuthNav localPage={localPage} />}
    </HeaderStyled>
      <PositionRoot id="menu-root"></PositionRoot>
    </>
  );
};

export default Header;
