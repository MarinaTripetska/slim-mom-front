import styled from 'styled-components';

export const Btn = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  padding: 10px;
  fill: var(--secondary-text-color);
  cursor: pointer;

  transition: fill var(--trans-duration) var(--timing-function);

  &:hover,
  &:focus {
    fill: var(--accent-color);
  }
`;
