import { useState } from "react";
import Header from "./Header";
import Menu from './Menu';
 


const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={ setOpen } />
      <Menu open={open} />
    </div>
  )
};

export default BurgerMenu;