import styled, { css } from 'styled-components';

export const ButtonStylePlh = css`
  display: inline-block;
  padding: 13px 25px;
  background: var(--accent-color);
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
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
  ${ButtonStylePlh}/* display: inline-block;
  padding: 13px 25px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer; */
    /* background: #6ded5b;//green */
`;
