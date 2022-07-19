import styled from "styled-components";

export const Product = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 280px;
  margin-bottom: 20px;
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
:last-child{
  margin-bottom:0px;
  @media screen and (min-width: 768px) {
    padding-bottom:30px;
  }
  }
  color: var(--main-text-color);
  > button {
    border:none;
    background-color: transparent;
    padding: 10px;
    height: 12px;
    width: 12px;
    cursor: pointer;
    > svg {
      display: block;
      object-fit: contain;  
      color:#9B9FAA;
    > path {
      
      stroke:#9B9FAA }
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #E0E0E0;
    padding-bottom: 8px;
    font-size: 14px;
    line-height: 17px;
    text-align: end;
    letter-spacing: 0.04em;
    :first-child {
      width: 130px;
      text-align: start;
    }
    width: 49px;
    :last-child{
      width: 59px;
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
      text-align: end;
      :first-child {
        width: 240px;
        text-align: start;
      }
      :last-child{
        width: 106px;
      }
    }
  }
`;