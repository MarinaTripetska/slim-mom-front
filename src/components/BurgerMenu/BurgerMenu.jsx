import { NavStyle, BurgerPosition, NavLinkStyle } from './BurgerMenu.styled';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ openBurgerMenu }) => {
        if (openBurgerMenu) {
            return (
            <NavStyle>
                <BurgerPosition>
                    <NavLinkStyle><NavLink to="/diary">diary</NavLink></NavLinkStyle>
                    <NavLinkStyle><NavLink to="/calculator">calculator</NavLink></NavLinkStyle>
                </BurgerPosition>
            </NavStyle>
        )
    }
    return (
        null
    )
}

export default BurgerMenu;