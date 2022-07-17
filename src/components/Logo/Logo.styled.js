import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const Image = styled.img`
  width: 46px;
  height: 44px;

  @media ${breakpoints.tablet} {
    width: 66px;
    height: 70px;
  }
`;
export const Text = styled.img`
  // display: none;
  visibility: hidden;
  position: absolute;
  width: 0;
  width: 106px;
  height: 16px;
  // @media (min-width: 767px) {
  //   position: relative;
  //   width: inherit;
  // }
  // @media ${breakpoints.mobile} {
  @media (min-width: 768px) {
    // display: flex;
    visibility: visible;
    position: relative;
    width: 107px;
    height: 16px;
    margin-left: 10px;
    margin-bottom: 25px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-left: 0;
  }
`;
