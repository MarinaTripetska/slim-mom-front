import styled from 'styled-components';
import bgi from '../../assets/images/leaves-desktop.png';

const SideBarDiv = styled.div`
  background: #f0f1f3;
  background-image: url(${bgi});

  background-repeat: no-repeat;
  max-width: 520px;
  height: 850px;
  max-height: 850px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: auto;
    max-height: fit-content;
    max-width: 100vw;
    flex-direction: row;
    align-items: baseline;
    padding-top: 90px;
    padding-bottom: 90px;
    justify-content: space-evenly;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;

const InfoList = styled.ul`
  width: 280px;
  margin-bottom: 60px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  @media (max-width: 768px) {
    width: 250px;
    margin: 0;
  }
  @media (max-width: 550px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

const ListTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: inherit;
  line-height: inherit;
  @media (max-width: 550px) {
    margin-bottom: 24px;
  }
`;

const InfoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: #9b9faa;
  &:not(:last-child) {
    margin-bottom: 14px;
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
`;

const ProdList = styled.p`
  color: #9b9faa;
`;

export { SideBarDiv, InfoList, InfoListItem, ProdListDiv, ProdList, ListTitle };
