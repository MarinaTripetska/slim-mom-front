import styled from 'styled-components';

import { breakpoints } from 'assets/sizes';
import bgi from 'assets/images/leaves-desktop.png';
import bgTablet from 'assets/images/leaves-aside-tablet.png';
import { ContainerStyledPlh } from 'components/MainContainer';

export const Thumb = styled.div`
  ${ContainerStyledPlh}
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  padding-top: 40px;
  padding-bottom: 24px;
  background: var(--secondary-background-color);

  @media ${breakpoints.minTablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;

    padding-top: 80px;
    padding-bottom: 80px;

    background-image: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: bottom right;
  }

  @media ${breakpoints.desktop} {
    position: relative;
    top: -150px;

    min-width: 520px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 60px;
    padding: 280px 95px 92px 95px;
    height: calc(100vh - 150px);
    background-image: url(${bgi});
  }
`;
export const ProdThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 280px;

  @media ${breakpoints.minTablet} {
    gap: 40px;
  }

  @media ${breakpoints.desktop} {
  }
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const List = styled.ul`
  color: var(--secondary-text-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const AltText = styled.p`
  color: var(--secondary-text-color);
`;
