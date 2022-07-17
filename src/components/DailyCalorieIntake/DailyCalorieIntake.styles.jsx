import styled from 'styled-components';

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
  @media (max-width: 767px) {
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

export { InfoList, InfoListItem, ListTitle };
