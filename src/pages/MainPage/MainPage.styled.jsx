import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const PageWrapper = styled.div`
  font-family: 'Verdana';
  font-style: normal;
  @media ${breakpoints.maxTablet} {
    margin: 0 auto;
    max-width: 320px;
    padding-top: 32px;
  }
  @media ${breakpoints.tablet} {
    max-width: 768px;
  }
  @media ${breakpoints.desktop} {
    max-width: 1280px;
  }
`;
