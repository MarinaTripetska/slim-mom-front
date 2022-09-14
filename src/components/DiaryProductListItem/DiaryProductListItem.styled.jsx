import styled, { css } from 'styled-components';
import { breakpoints } from 'assets/sizes';
import { TextMoveAnimation } from 'animations/TextMoveAnimation.styled';

export const Product = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 17px; */

  color: var(--main-text-color);

  @media ${breakpoints.minTablet} {
    gap: 32px;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;

  @media ${breakpoints.minTablet} {
    gap: 22px;
  }
`;

const InfoElemBase = css`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;

  font-size: 10px;
  white-space: nowrap;

  @media ${breakpoints.mobile} {
    font-size: 14px;
  }

  @media ${breakpoints.minTablet} {
    padding-bottom: 20px;
  }
`;

export const ProductNameThumb = styled.div`
  ${InfoElemBase};
  position: relative;
  max-width: 160px;
  overflow: hidden;

  @media ${breakpoints.minTablet} {
    max-width: 240px;
  }

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 20px;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
`;
export const ProductName = styled.span`
  display: inline-block;
  padding-left: 15px;

  &.animate {
    animation: 3s linear 0s infinite alternate ${TextMoveAnimation};
  }
`;

export const ProductWeight = styled.div`
  ${InfoElemBase};
  max-width: 35px;
  @media ${breakpoints.mobile} {
    max-width: 40px;
  }

  @media ${breakpoints.minTablet} {
    max-width: 106px;
    text-align: end;
  }
`;

export const ProductCalories = styled.div`
  ${InfoElemBase};
  max-width: 50px;

  @media ${breakpoints.mobile} {
    max-width: 70px;
  }

  @media ${breakpoints.minTablet} {
    text-align: end;
    max-width: 106px;
  }
`;

export const BtnClose = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 7px;
    height: 7px;
    /* display: block; */
    /* object-fit: contain; */
    color: #9b9faa;
    @media ${breakpoints.mobile} {
      width: 12px;
      height: 12px;
    }
  }
`;
