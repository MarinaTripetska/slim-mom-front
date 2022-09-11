import styled from 'styled-components';

export const Btn = styled.button`
  position: ${props => props.position || 'static'};
  top: 35px;
  right: 10px;
  border: none;
  padding: 10px;
  background-color: transparent;
  color: var(--secondary-text-color);
  cursor: pointer;

  transition: color var(--trans-duration) var(--timing-function);

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
