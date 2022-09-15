import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const HeaderStyled = styled.header`
  min-height: 80px;
  @media ${breakpoints.desktop} {
    min-height: 150px;
  }
`;
