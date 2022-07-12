import { NavStyle, BurgerPosition, NavLinkStyle} from './BurgerMenu.styled';

const BurgerMenu = ({ openBurgerMenu }) => {
        if (openBurgerMenu) {
            return (
            <NavStyle>
                <BurgerPosition>
                    <NavLinkStyle><a href="../diary">diary</a></NavLinkStyle>
                    <NavLinkStyle><a href="../calculator">calculator</a></NavLinkStyle>
                </BurgerPosition>
            </NavStyle>
        )
    }
    return (
        null
    )
}

export default BurgerMenu;