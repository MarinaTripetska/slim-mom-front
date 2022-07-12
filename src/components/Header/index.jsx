import HeaderPosition from "./Header";
import BurgerMenu from 'components/BurgerMenu';
import { useState } from 'react';
 
const Header = () => {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  return (
    <div>
      <HeaderPosition openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={ setOpenBurgerMenu } />
      <BurgerMenu openBurgerMenu={openBurgerMenu} />
    </div>
  )
};
export default Header;