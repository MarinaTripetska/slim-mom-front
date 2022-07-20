import styled from 'styled-components';

const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 550px) {
    gap: 24px;
  }
  /* @media (min-width: 1280px) { */
  margin-bottom: 60px;
  /* } */
`;
const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;

  max-width: 280px;
  width: 100%;
  line-height: 1.4;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const ListTitle = styled.h3`
  font-size: inherit;
  line-height: inherit;
`;

const InfoListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--secondary-text-color);
`;

const Span = styled.span`
  color: ${props => (props.upperHandred ? 'red' : '#9b9faa')}; ;
`;

export { Thumb, InfoList, InfoListItem, ListTitle, Span };
