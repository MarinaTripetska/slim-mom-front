import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const NavStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #264061;
@media ${breakpoints.desktop}{
    display: none;
  }
`;

export const BurgerPosition = styled.ul`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  padding-top: 60px;
  color: #ffffff;
@media ${breakpoints.tablet}{
    font-size: 24px;
    line-height: 2.1;
      padding-top: 100px;
  }
`;

export const NavLinkStyle = styled.li`
      :hover{
    color: #9B9FAA;
  }
`;

export const NavStyleDesktop = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  @media ${breakpoints.maxDesktop}{
    display: none;
  }
`;

export const BurgerPositionDesktop = styled.ul`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  padding-top: 60px;
  color: #9B9FAA;
  flex-direction: row;
`;

export const NavLinkStyleDesktop = styled.li`
  margin-left: 16px;
      :hover{
    color: #9B9FAA;
  }
`;