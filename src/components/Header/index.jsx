import {ClearHeader, HeaderRegistrUser, HeaderLoginUser} from "./Header";
import BurgerMenu from 'components/BurgerMenu';
import { useState } from 'react';
import {UserInfoMenuMobile} from 'components/UserInfoMenu';
 
const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <div>
      <HeaderLoginUser/>
      {/* <BurgerMenu openBurgerMenu={openBurgerMenu} setOpenBurgerMenu={ setOpenBurgerMenu }/>
      <UserInfoMenuMobile /> */}
    </div>
  )
};
export default Header;