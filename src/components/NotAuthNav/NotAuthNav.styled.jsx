import { ContainerStyledPlh } from 'components/MainContainer/MainContainer.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const Thumb = styled.div`
  ${ContainerStyledPlh};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  min-height: 80px;
  max-width: 100%;
  border-bottom: 2px solid var(--border-color);
  @media ${breakpoints.minTablet} {
  }
  @media ${breakpoints.desktop} {
    border-bottom: none;
    justify-content: flex-start;
    align-items: flex-end;
    min-height: 150px;
    gap: 40px;
  }
`;
export const LogoThumb = styled.div`
  ::after {
    ${props =>
      props.showVerticalLine &&
      ` content: '';
    display: block;

    position: relative;
    left: 170px;
    bottom: 7px;

    width: 32px;
    height: 2px;

    transform: rotate(90deg);
    background-color: var(--border-color);`}
  }
`;
export const NavThumb = styled.div`
  display: flex;
  gap: 16px;

  text-transform: uppercase;
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--secondary-text-color);
  transition: color var(--transition-params);
  padding-top: 15px;
  :hover,
  :focus {
    color: var(--main-text-color);
  }

  @media ${breakpoints.maxMobile} {
    font-size: 12px;
  } ;
`;
