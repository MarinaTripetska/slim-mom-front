import styled from 'styled-components';

export const NavPosition = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: stretch;
  align-content: space-between;
  justify-content: space-between;
  border-bottom: 2px solid #E0E0E0;
`;

export const Home = styled.a`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  padding-top: 12px;
  padding-left: 20px;
    @media (min-width: 768px) {
      padding-left: 32px;
  }
`;

export const MomStyle = styled.span`
    color: #fc842d;
`;

export const ButtonBurger = styled.button`
  display: block;
  height: 20px;
  transform-origin: 16px 11px;
  float: left;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 20px;
  outline: 0;
  border: 0;
  padding: 0px;
  background: none;
    @media (min-width: 768px) {
      margin-right: 32px;
  }
    @media (min-width: 1200px) {
      display: none;
  }
`;

export const SlimStyle = styled.p`
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.04em;
    padding-top: 12px;
    padding-left: 8px;
`;

export const ImgPosition = styled.img`
    margin-top: 8px;
`;