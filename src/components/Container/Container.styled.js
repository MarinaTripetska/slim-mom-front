import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  @media ${breakpoints.maxTablet} {
    margin: 0 auto;
    width: 320px;
    max-width: 320px;
    padding-top: 40px;
  }
  @media ${breakpoints.tablet} {
    width: 768px;
  }
  @media ${breakpoints.desktop} {
    /* width: 100%; */
    width: 1280px;
    padding-top: 306px;
    /* padding: 0 16px; */
  }
  /* @media (min-width: 768px) {
    .container {
      padding: 0;
    }
  } */
`;
