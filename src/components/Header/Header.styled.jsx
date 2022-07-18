import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const HeaderStyled = styled.header`
  position: static;
  top: 0;
  /* height: 80px; */
  border-bottom: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  padding: 20px 32px;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  z-index: 1000;
  @media ${breakpoints.tablet} {
    position: absolute;
    top: 0;
    padding: 16px 32px;
  }
  @media ${breakpoints.desktop} {
    border-bottom: none;
    padding: 80px 16px;
  }
`;

export const PositionRoot = styled.div`
  position: static;
  @media ${breakpoints.onlyTablet} {
    padding-top: 80px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 0px;
  }
`;
