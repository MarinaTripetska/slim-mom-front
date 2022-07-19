import styled from 'styled-components';

export const MobileSidebarWrap = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--secondary-background-color);  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
