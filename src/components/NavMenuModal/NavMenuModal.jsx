import { NavLinkStyled, Thumb } from './NavMenuModal.styled';

const NavMenuModal = ({ handleMenuOpen }) => {
  return (
    <Thumb>
      <NavLinkStyled to="/diary" onClick={() => handleMenuOpen(false)}>
        Щоденник
      </NavLinkStyled>
      <NavLinkStyled to="/calculator" onClick={() => handleMenuOpen(false)}>
        Калькулятор
      </NavLinkStyled>
    </Thumb>
  );
};

export default NavMenuModal;
