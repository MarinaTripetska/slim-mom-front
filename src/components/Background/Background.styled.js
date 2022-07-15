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
  position: fixed;

  width: 100%;
  height: 100vh;
  @media ${breakpoints.tablet} {
    // padding: 160px 32px 418px 32px;
    // min-width: 768px;

    // background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});
    background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});

    background-repeat: no-repeat;

    // background-position: left 277px top 593px, left 487px top 558px,
    //   left 16px top -97px, left 247px top 461px;
    background-position: right 0px bottom 0px, right -50px bottom 279px,
      right 12px bottom 279px;

    // background-size: 491px 431px, 291px 284px, 740px 842px, 553px 750px;
    background-size: 491px 431px, 291px 284px, 740px 845px, 553px 750px;
  }
  @media ${breakpoints.desktop} {
    //  padding: 160px 16px 180px 16px;
    // min-width: 1280px;
    background-image: url(${frame}), url(${vector_d});
    background-position: bottom right, bottom right;
    background-repeat: no-repeat;
    background-size: 980px 820px, 602px 816px;
  }
`;
