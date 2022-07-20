import styled from 'styled-components';
import bgi from '../../assets/images/leaves-desktop.png';
import bgTablet from '../../assets/images/leaves-aside-tablet.png';
import { breakpoints } from '../../assets/sizes';

const SideBarDiv = styled.div`
  background: #f0f1f3;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakpoints.maxDesktop} {
    height: 100%;
    max-height: fit-content;
    max-width: 100vw;
    flex-direction: row;
    align-items: baseline;
    padding: 40px 20px;
    justify-content: space-evenly;
  }
  @media ${breakpoints.onlyTablet} {
    background-image: url(${bgTablet});
    background-repeat: no-repeat;
    background-position: bottom right;
    padding-top: 0;
    padding-bottom: 0;
  }
  @media ${breakpoints.desktop} {
    background-image: url(${bgi});
  }
`;

const ListTitle = styled.h3`
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 40px;

  @media (max-width: 550px) {
    margin-bottom: 24px;
  }
`;
const ProdDiv = styled.div`
  @media ${breakpoints.onlyTablet} {
    margin-left: 97px;
  }
`;

const ProdListDiv = styled.div`
  width: 280px;
  @media (max-width: 768px) {
    width: 250px;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  @media ${breakpoints.onlyTablet} {
    display: flex;
    width: 100%;

    padding: 80px 32px;
  }
`;

const ProdList = styled.ul`
  color: #9b9faa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const AltText = styled.p`
  font-size: 0.9em;
  color: #9b9faa;
`;

export { AltText, SideBarDiv, ProdListDiv, ProdList, ListTitle, ProdDiv };
