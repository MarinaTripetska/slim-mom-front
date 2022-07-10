import { NavStyle, NavPosition, NavLinkStyle} from './Menu.styled';

const Menu = ({ open }) => {
        if (open) {
            return (
            <NavStyle>
                <NavPosition>
                    <NavLinkStyle><a href="../diary">diary</a></NavLinkStyle>
                    <NavLinkStyle><a href="../calculator">calculator</a></NavLinkStyle>
                </NavPosition>
            </NavStyle>
        )
    }
    return (
        null
    )
}

export default Menu;