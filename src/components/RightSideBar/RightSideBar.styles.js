import styled from 'styled-components';
import bgi from '../../assets/images/leaves-desktop.png';

const SideBarDiv = styled.div`
  background: #f0f1f3;
  background-image: url(${bgi});
  margin: auto;

  background-repeat: no-repeat;
  // max-width: 520px;
  height: 850px;
  max-height: 850px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1279px) {
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

const ListTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: inherit;
  line-height: inherit;
  @media (max-width: 550px) {
    margin-bottom: 24px;
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

export { SideBarDiv, ProdListDiv, ProdList, ListTitle };
