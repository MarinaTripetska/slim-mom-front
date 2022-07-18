import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  @media ${breakpoints.maxTablet} {
    margin: 0 auto;
    max-width: 320px;
    padding-top: 40px;
    /* padding: 0 20px; */
  }
  @media ${breakpoints.tablet} {
    max-width: 768px;
    /* padding: 0 32px; */
  }
  @media ${breakpoints.desktop} {
    /* width: 100%; */
    max-width: 1280px;
    /* padding: 0 16px; */
  }
  /* @media (min-width: 768px) {
    .container {
      padding: 0;
    }
  } */
`;
