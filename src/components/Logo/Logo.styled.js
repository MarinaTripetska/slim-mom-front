import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const LogoStyled = styled.div`
  align-items: center;
  display: flex;
  @media ${breakpoints.desktop} {
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  width: 46px;
  height: 44px;

  @media ${breakpoints.tablet} {
    width: 66px;
    height: 70px;
  }
`;
export const Text = styled.img`
  display: none;
  width: 106px;
  height: 16px;

  @media ${breakpoints.tablet} {
    display: inline;
    width: 107px;
    height: 16px;
  }
`;
