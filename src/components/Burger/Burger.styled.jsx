import { TransitionAnimation } from 'animations/TransitionAnimation.styled';
import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const Button = styled.button`
  /* display: none; */

  /* @media ${breakpoints.maxTablet} { */
  display: block;
  border: none;
  background: none;
  padding: 5px;

  cursor: pointer;

  animation: ${TransitionAnimation} 0.5s linear infinite;
  animation-iteration-count: 1;
  /* } */
`;
