import styled from 'styled-components';

const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  max-width: 280px;

  @media (max-width: 550px) {
    gap: 24px;
  }
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const ListTitle = styled.h3`
  font-weight: 700;
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
