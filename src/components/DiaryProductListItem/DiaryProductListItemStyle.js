import styled from 'styled-components';

export const Product = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin-bottom: 20px;

  color: var(--main-text-color);
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0;
    height: 10px;
    width: 10px;

    cursor: pointer;

    > svg {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;

      > path {
        stroke: var(--secondary-text-color);
      }
    }
  }
  @media screen and (min-width: 768px) {
    width: 565px;
    & > button {
      height: 12px;
      width: 12px;
    }
  }
`;
export const ProductInfo = styled.div`
  display: flex;

  > div {
    border-bottom: 1px solid '#E0E0E0';
    padding-bottom: 8px;
    font-size: '14px';
    line-height: 17px;
    text-align: start;
    letter-spacing: 0.04em;
    :first-child {
      width: 130px;
    }
    :not(:last-child) {
      margin-right: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 520px;
    justify-content: space-between;
    > div {
      padding-bottom: 20px;
      margin-right: 0;
      width: 106px;
      margin: 0;
      :first-child {
        width: 240px;
      }
    }
  }
`;
