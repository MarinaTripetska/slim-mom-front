import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const ProductsListThumb = styled.div`
  position: relative;

  @media ${breakpoints.minTablet} {
    max-height: 240px;

    :before {
      pointer-events: none;
      width: 634px;
      position: absolute;
      bottom: 0;
      height: 50px;
      left: 0;
      right: 0;
      background: linear-gradient(0, #fff, transparent);
      content: '';
    }
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  max-height: 230px;
  width: 310px;
  margin-left: -20px;
  margin-right: -10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(38, 64, 97);
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-background-color);
  }
  @media ${breakpoints.minTablet} {
    margin-left: 0;
    margin-right: 0;
    width: 640px;
    margin-bottom: 55px;
    align-items: flex-start;
  }
`;

export const AlternativeText = styled.p`
  padding: 50px 0;
  font-size: 12px;
  color: var(--secondary-text-color);

  /* @media screen and (max-width: 767px) {
    display: none;
  } */
`;
