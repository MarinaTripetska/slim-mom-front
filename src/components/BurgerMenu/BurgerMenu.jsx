import { NavStyle, BurgerPosition, NavLinkStyle } from './BurgerMenu.styled';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ openBurgerMenu }) => {
  if (openBurgerMenu) {
    return (
      <NavStyle>
        <BurgerPosition>
          <NavLinkStyle>
            <NavLink to="/diary">Щоденник</NavLink>
          </NavLinkStyle>
          <NavLinkStyle>
            <NavLink to="/calculator">Калькулятор</NavLink>
          </NavLinkStyle>
        </BurgerPosition>
      </NavStyle>
    );
  }
  return null;
};

export default BurgerMenu;
