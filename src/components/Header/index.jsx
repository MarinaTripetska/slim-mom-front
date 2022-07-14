import HeaderPosition from "./Header";
import BurgerMenu from 'components/BurgerMenu';
import { useState } from 'react';
import {UserInfoMenuMobile} from 'components/UserInfoMenu';
 
const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <div>
      <HeaderPosition openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={ setOpenBurgerMenu } />
      <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={ setOpenBurgerMenu }/>
      <UserInfoMenuMobile />
    </div>
  )
};
export default Header;