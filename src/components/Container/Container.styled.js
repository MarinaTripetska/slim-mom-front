import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: auto;
  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
