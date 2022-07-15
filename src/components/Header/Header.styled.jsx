import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 80px;
  border-bottom: 2px solid var(--border-color);

  @media ${breakpoints.laptop} {
    height: 150px;
    border: none;
  }
`;
