import { NavStyle, BurgerPosition, NavLinkStyle } from './BurgerMenu.styled';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
  // const [isDesktop, setDesktop] = useState(window.innerWidth > 767);
  // const [userLogIn, setUserLogIn] = useState(true);
  // const updateMedia = () => {
  //       setDesktop(window.innerWidth > 767);
  //   };
  //   useEffect(() => {
  //       window.addEventListener("resize", updateMedia);
  //       return () => window.removeEventListener("resize", updateMedia);
  //   });
  // const LogoShow = () => {
  //   if (userLogIn) {
  //     return (
  //     <SlimStyle>
  //       Slim <MomStyle>Mom</MomStyle>
  //     </SlimStyle>
  //   )
  //   }
  //   return null;
  // }
const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1279);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 767);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
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