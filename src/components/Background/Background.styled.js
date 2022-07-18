import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';
import straw from '../../assets/images/strawberry-desktop.png';
import ban from '../../assets/images/banana-tablet.png';
import leaves from '../../assets/images/leaves-tablet.png';
import vector from '../../assets/images/vector-tablet.png';
import frame from '../../assets/images/desktop.png';
import vector_d from '../../assets/images/vector-desktop.png';

export const Background = styled.div`
  //pointer-events: none;
  position: relative;

  width: 100%;
  height: 100vh;

  /* padding-top: 112px; */
  /* padding-left: 20px; */

  @media ${breakpoints.tablet} {
    padding-top: 180px;
    /* padding-left: 32px; */
    background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});

    background-repeat: no-repeat;

    background-position: right 0 bottom 0, right -50px bottom 279px,
      right 12px bottom 279px;

    background-size: 491px 431px, 291px 284px, 740px 845px, 553px 750px;
    bottom: 0;
    /* width: 100vh; */
  }
  @media ${breakpoints.desktop} {
    padding-top: 293px;
    /* padding-left: 16px; */
    background-image: url(${frame}), url(${vector_d});
    background-position: bottom right, bottom right;
    background-repeat: no-repeat;
    background-size: 980px 820px, 602px 816px;
  }
`;
