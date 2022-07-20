import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const ProductsListThumb = styled.div`
  position: relative;

  @media ${breakpoints.tablet} {
    max-height: 240px;
    :before {
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
  @media ${breakpoints.tablet} {
    overflow-y: scroll;
    width: 640px;
    margin-bottom: 55px;
    align-items: flex-start;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(38, 64, 97);
    }
    ::-webkit-scrollbar-track {
      background: var(--secondary-background-color);
    }
  }
`;
export const AlternativeText = styled.p`
  padding: 50px 0;
  font-size: 12px;
  color: var(--secondary-text-color);
`;