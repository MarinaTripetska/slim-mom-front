import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'assets/sizes';
import { ContainerStyledPlh } from 'components/MainContainer/MainContainer.styled';

export const Thumb = styled.div`
  ${ContainerStyledPlh};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  min-height: 80px;
  border-bottom: 2px solid var(--border-color);

  @media ${breakpoints.desktop} {
    border-bottom: none;
    align-items: flex-end;
    min-height: 150px;
    max-width: 100%;
  }
`;

export const DesktopNavigationThumb = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
`;

export const TabletNavigationThumb = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoStyled = styled.div`
  @media ${breakpoints.desktop} {
    &::after {
      content: '';
      display: block;

      position: relative;
      left: 170px;
      bottom: 7px;

      width: 32px;
      height: 2px;

      transform: rotate(90deg);
      background-color: var(--border-color);
    }
  }
`;

export const NavThumb = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  color: var(--secondary-text-color);

  cursor: pointer;
  transition: color var(--transition-params);

  &.active {
    color: var(--main-text-color);
  }

  :hover,
  :focus {
    color: var(--main-text-color);
  }
`;

export const UserThumb = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 30px;
`;

export const UserName = styled.p`
  position: relative;
  &::after {
    content: '';
    display: block;

    position: absolute;
    right: -15px;
    bottom: -7px;
    width: 2px;
    height: 32px;

    background-color: var(--border-color);
  }
`;

export const LogoutBtn = styled.button`
  border: none;
  color: var(--secondary-text-color);
  cursor: pointer;
  transition: color var(--transition-params);

  :hover,
  :focus {
    color: var(--main-text-color);
  }
`;
