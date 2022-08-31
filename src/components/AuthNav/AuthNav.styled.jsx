import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';
import { NavLink } from 'react-router-dom';

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
  @media ${breakpoints.maxMobile} {
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
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: -7px;

  @media ${breakpoints.maxMobile} {
    display: none;
  }
`;

export const UserNameStyle = styled.span``;

export const ExitBtn = styled.button`
  border: none;
  color: var(--secondary-text-color);
  cursor: pointer;
`;

export const Vertical = styled.div`
  border-left: 2px solid var(--border-color);
  height: 32px;
  margin-top: 4px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const VerticalDeskTop = styled.div`
  border-left: 2px solid var(--border-color);
  height: 32px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: -7px;

  @media ${breakpoints.maxTablet} {
    display: none;
  }
`;

export const NavLinkStyleMenu = styled(NavLink)`
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin-right: 16px;
  cursor: pointer;

  &.active {
    color: var(--main-text-color);
  }
`;
