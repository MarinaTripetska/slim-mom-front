import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const HeaderStyled = styled.header`
  height: 80px;
  border-bottom: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;

  @media ${breakpoints.desktop} {
    border: none;
  }
`;
