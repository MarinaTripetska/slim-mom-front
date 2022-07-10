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
  visibility: hidden;
  width: 106px;
  height: 16px;

  @media ${breakpoints.mobile} {
    visibility: visible;
    width: 107px;
    height: 16px;
  }
`;
