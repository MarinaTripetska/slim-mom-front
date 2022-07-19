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
  // position: relative;
  /* display: block; */
  padding-top: 120px;
  @media ${breakpoints.maxTablet} {
    padding-top: 0;
  }
  @media ${breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  /* @media ${breakpoints.desktop} {
    display: flex;
  } */
`;
// margin: auto;  вывел из ContainerForm
export const ContainerForm = styled.div`
  @media ${breakpoints.maxTablet} {
    margin: 0 auto;
    max-width: 320px;
    padding-top: 32px;
    padding-bottom: 40px;
  }
  @media ${breakpoints.tablet} {
    max-width: 768px;
    padding: 40px 32px 48px;
  }
  @media ${breakpoints.desktop} {
    width: 1280px;
    padding: 150px 16px 111px 16px;
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
    width: 100%;
    // padding: 0 32px;
    height: auto;
  }
  @media ${breakpoints.desktop} {
    width: 520px;
    position: absolute;
    //padding: 0 16px;
    margin-left: auto;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 0;
  }
`;
