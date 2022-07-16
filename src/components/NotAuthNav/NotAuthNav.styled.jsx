import styled from 'styled-components';

export const NavThumb = styled.div`
  padding: 0 20px;

  display: flex;
  gap: 16px;

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 1px;
    background-color: grey;
    transform: rotate(90deg);
  }
`;
