import styled, { css } from 'styled-components';

export const ButtonStylePlh = css`
  display: inline-block;
  padding: 13px 25px;
  background: var(--accent-color);
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  line-height: 1.2;
  color: var(--white);
  cursor: pointer;

  &:focus {
    background: #6ded5b; //orange f56905
  }
  &:disabled {
    background: var(--secondary-text-color);
    box-shadow: 0px 4px 10px var(--secondary-text-color);
  }
`;

export const Btn = styled.button`
  ${ButtonStylePlh}
 
`;
