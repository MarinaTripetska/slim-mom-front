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
  // position: fixed;

  width: 100%;

  @media ${breakpoints.onlyTablet} {
    background-image: url(${ban}), url(${straw}), url(${leaves}), url(${vector});
    min-height: 1024px;
    background-repeat: no-repeat;

    background-position: right 0px bottom 0px, right 50px bottom 179px,
      right 252px bottom 0, right 0px bottom -100px;

    background-size: 491px 431px, 241px 234px, 440px 545px, 553px 750px;
  }
  @media ${breakpoints.laptop} {
    background-image: url(${frame}), url(${vector_d});
    // min-height: 1024px;
    min-height: 100vh;
    background-repeat: no-repeat;

    // background-position: right 0px top 0px, right 0px bottom 0px,
    //   right 200px bottom 100px, right 0 bottom 0;

    // background-size: 491px 431px, 301px 294px, 490px 595px, 553px 750px;
    background-position: bottom right, bottom right;
    background-repeat: no-repeat;
    background-size: 910px 740px, 502px 716px;
  }
  @media ${breakpoints.desktop} {
    background-image: url(${frame}), url(${vector_d});
    background-position: bottom right, bottom right;
    background-repeat: no-repeat;
    background-size: 980px 820px, 602px 816px;
  }
`;
