import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const ProductsListThumb = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  min-height: 100px;
  max-height: 200px;
  overflow-y: hidden;

  :before {
    content: '';
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    z-index: 2;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }

  @media ${breakpoints.minTablet} {
    min-height: 200px;
    max-height: 240px;
    max-width: 610px;
  }
`;

export const ProductsList = styled.ul`
  width: 100%;
  max-height: 200px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;

  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #264061;
  }

  @media ${breakpoints.minTablet} {
    gap: 16px;
    max-height: 240px;
    padding-right: 40px;
  }
`;

export const AlternativeText = styled.p`
  font-size: 12px;
  color: var(--secondary-text-color);
`;
