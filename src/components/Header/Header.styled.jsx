import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const HeaderStyled = styled.header`
  position: absolute;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  z-index: 50;
  @media ${breakpoints.desktop} {
      border-bottom: none;
      height: 150px;
      align-items: flex-end;
  }
`;

export const PositionRoot = styled.div`
  position: static;
  padding-top: 80px;
  @media ${breakpoints.desktop} {
    padding-top: 0px;
  }
`;
