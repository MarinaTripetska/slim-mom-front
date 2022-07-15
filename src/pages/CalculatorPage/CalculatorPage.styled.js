import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const PageWrapper = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  font-family: 'Verdana';
  font-style: normal;
  @media (min-width: 768px) {
    margin-top: 150px;
    margin-left: 16px;
  }
  @media (min-width: 1280px) {
    margin-top: 100px;
    margin-left: 32px;
  }
`;
export const Section = styled.div`
  display: block;
  @media ${breakpoints.desktop} {
    display: flex;
  }
`;

export const ContainerBar = styled.div`
  margin: auto;
  @media ${breakpoints.maxTablet} {
    //width: 320px;
    //padding: 0 20px;
  }
  @media ${breakpoints.tablet} {
    //width: 768px;

    // padding: 0 32px;
  }
  @media ${breakpoints.desktop} {
    width: 1280px;
    padding: 0 16px;
    margin-left: auto;
  }
`;