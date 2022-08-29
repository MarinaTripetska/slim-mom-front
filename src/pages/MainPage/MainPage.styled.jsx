import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const PageWrapper = styled.div`
  font-family: 'Verdana';
  font-style: normal;

  @media ${breakpoints.maxMobile} {
    margin: 0 auto;
    max-width: 320px;
    padding-top: 32px;
  }

  @media ${breakpoints.minTablet} {
    max-width: 768px;
    padding-top: 100px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1280px;
    padding-top: 306px;
  }
`;
