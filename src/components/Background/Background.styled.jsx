import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';
import straw from '../../assets/images/strawberry-desktop.png';
import ban from '../../assets/images/banana-tablet.png';
import leaves from '../../assets/images/leaves-tablet.png';
import vector from '../../assets/images/vector-tablet.png';
import frame from '../../assets/images/desktop.png';
import vector_d from '../../assets/images/vector-desktop.png';

export const BackgroundStyled = styled.div`
  position: relative;
  flex-grow: 2;
  width: 100%;
  height: 100%;

  @media ${breakpoints.minTablet} {
    background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});
    background-repeat: no-repeat;
    background-position: right 0px bottom 0px, right -50px bottom 279px,
      right 12px bottom 279px;
  }

  @media ${breakpoints.desktop} {
    background-image: url(${frame}), url(${vector_d});
    background-position: bottom right, bottom right;
    background-repeat: no-repeat;
  }
`;
