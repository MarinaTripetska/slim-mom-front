import HeaderPosition from "./Header";
import BurgerMenu from 'components/BurgerMenu';
import { useState } from 'react';
import UserInfoMenu from 'components/UserInfoMenu';
 
const Header = () => {
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  return (
    <div>
      <HeaderPosition openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={ setOpenBurgerMenu } />
      <BurgerMenu openBurgerMenu={openBurgerMenu} />
      <UserInfoMenu/>
    </div>
  )
};
export default Header;