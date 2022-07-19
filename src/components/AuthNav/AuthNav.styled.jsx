import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';
import { NavLink } from 'react-router-dom';
import { keyframes } from 'styled-components';

const Animation = keyframes`
0%
  {
    opacity: 0.40;
  }
  50%
  {
    opacity: 0.60;
  }
  75%
  {
    opacity: 0.8;
  }
  100%
  {
    opacity: 1.0;
  }
`;

export const AuthNavStyled = styled.div`
  width: 100%;
  @media ${breakpoints.desktop} {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
`;
export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${breakpoints.desktop} {
    align-items: flex-end;
  }
`;

export const Logostyled = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const NavThumb = styled.div`
  @media ${breakpoints.maxTablet} {
    display: none;
  }
  @media ${breakpoints.onlyTablet} {
    display: none;
  }
`;

export const Userstyled = styled.div`
  display: flex;
`;

export const DivNic = styled.div``;
export const UserThumb = styled.div`
  @media ${breakpoints.maxTablet} {
    display: none;
  }
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: -7px;
`;

export const UserNameStyle = styled.span``;

export const ExitBtn = styled.button`
  border: none;
  color: #9b9faa;
  cursor: pointer;
`;

export const Vertical = styled.div`
  border-left: 2px solid #e0e0e0;
  height: 32px;
  margin-top: 4px;
  margin-left: 20px;
  margin-right: 20px;
  @media ${breakpoints.desktop} {
    margin-bottom: -7px;
  }
`;

export const VerticalDeskTop = styled.div`
  @media ${breakpoints.maxDesktop} {
    display: none;
  }
  border-left: 2px solid #e0e0e0;
  height: 32px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: -7px;
`;

export const NavLinkStyleMenu = styled(NavLink)`
  color: #9b9faa;
  text-transform: uppercase;
  margin-right: 16px;
  cursor: pointer;
  &.active {
    color: #212121;
  }
`;

export const ButtonBurger = styled.button`
  display: none;
  @media ${breakpoints.maxDesktop} {
    animation: ${Animation} 1s linear infinite;
    animation-iteration-count: 1;
    display: block;
    border: none;
    background: none;
    margin-left: 53px;
    cursor: pointer;
  }
`;

export const NavThumbOpen = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  padding-top: 60px;
  color: #ffffff;
  background-color: #264061;
  /* overflow-y: hidden; */
  @media ${breakpoints.tablet} {
    font-size: 24px;
    line-height: 2.1;
    padding-top: 100px;
  }
  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const NavLinkStyleMenuOpen = styled(NavLink)`
  color: #9b9faa;
  text-transform: uppercase;
  margin-right: 16px;
  cursor: pointer;
  &.active {
    color: #212121;
  }
  @media ${breakpoints.maxTablet} {
    margin-right: 0px;
    margin-bottom: 14px;
  }
`;
