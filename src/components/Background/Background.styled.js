import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';
import straw from '../../assets/images/strawberry-desktop.png';
import ban from '../../assets/images/banana-tablet.png';
import leaves from '../../assets/images/leaves-tablet.png';
import vector from '../../assets/images/vector-tablet.png';
import frame from '../../assets/images/desktop.png';

export const BackWrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media ${breakpoints.tablet} {
    padding: 160px 32px 418px 32px;
    min-width: 768px;
    background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});
    background-repeat: no-repeat;
    background-position: bottom right, bottom 200px right,
      bottom 280px right 12px, bottom right;
    background-size: 740px 527px, 291px 284px, 740px 842px, 553px 750px;
  }
  @media ${breakpoints.desktop} {
     padding: 160px 16px 180px 16px;
    min-width: 1280px;
    background-image: url(${frame}),
          background-position: bottom right, bottom right;
    background-size: 980px 820px;
  }
`;
