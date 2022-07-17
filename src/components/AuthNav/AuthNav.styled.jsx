import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled.div`
  width: 100%;
`;
export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${breakpoints.desktop}{
    align-items: flex-end;
  }
`;

export const Logostyled = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const NavThumb = styled.div`
  @media ${breakpoints.maxTablet}{
    display: none;
  }
  @media ${breakpoints.onlyTablet}{
    display: none;
  }
`;

export const Userstyled = styled.div`
display: flex;
`;
export const DivNic = styled.div``;
export const UserThumb = styled.div`
  @media ${breakpoints.maxTablet}{
    display: none;
  }
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserNameStyle = styled.span`
`;

export const ExitBtn = styled.button`
  border: none;
  color: #9B9FAA;
`;

export const Vertical = styled.div`
  border-left: 2px solid #E0E0E0;
  height: 32px;
  margin-top: 4px;
  margin-left: 20px;
  margin-right: 20px;
  @media ${breakpoints.desktop}{
    margin-bottom: -7px;
  }
`;

export const VerticalDeskTop = styled.div`
  @media ${breakpoints.maxDesktop}{
    display: none;
  }
    border-left: 2px solid #E0E0E0;
    height: 32px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: -7px;
`;

export const NavLinkStyleMenu = styled(NavLink)`
  color:#9B9FAA;
  text-transform: uppercase;
  margin-right: 16px;
  &.active{
    color: #212121;
  }
`;

export const ButtonBurger = styled.button`
  display: none;
  @media ${breakpoints.maxDesktop} {
    display: block;
    border: none;
    background: none;
    margin-left: 53px;
  }
`;

export const NavThumbOpen = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const NavLinkStyleMenuOpen = styled(NavLink)`
  color:#9B9FAA;
  text-transform: uppercase;
  margin-right: 16px;
  &.active{
    color: #212121;
  }
`;