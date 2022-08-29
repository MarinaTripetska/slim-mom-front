import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const NavStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--blue-txt-color);

  @media ${breakpoints.desktop} {
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
  color: var(--white);

  @media ${breakpoints.minTablet} {
    font-size: 24px;
    line-height: 2.1;
    padding-top: 100px;
  }
`;

export const NavLinkStyle = styled.li`
  :hover {
    color: var(--secondary-text-color);
  }
`;

export const NavStyleDesktop = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: flex-end;
  flex-direction: row;

  @media ${breakpoints.maxTablet} {
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

  color: var(--secondary-text-color);
  flex-direction: row;
`;

export const NavLinkStyleDesktop = styled.li`
  margin-left: 16px;

  :hover {
    color: var(--secondary-text-color);
  }
`;
