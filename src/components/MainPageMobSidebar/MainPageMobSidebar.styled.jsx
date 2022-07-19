import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const MainPageMobSidebarWrap = styled.div`
  /* width: 100%; */
  height: 40px;
  background-color: var(--secondary-background-color);
  margin-bottom: 40px;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;
