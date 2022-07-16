import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const NotAuthNavStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoints.desktop} {
    justify-content: flex-start;
    align-items: flex-end;
    
`;

export const NavThumb = styled.div`
  //padding: 0 20px;

  align-items: center;
  display: flex;

  gap: 16px;

  @media ${breakpoints.desktop} {
    justify-content: flex-start;
    align-items: flex-end;
    &::before {
      content: '';
      width: 32px;
      height: 1px;
      background-color: grey;
      transform: rotate(90deg);
      align-items: flex-end;
    }
  }
`;
