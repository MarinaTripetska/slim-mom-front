const { keyframes } = require('styled-components');

export const TransitionAnimation = keyframes`
0%
  {
    opacity: 0.40;
  }
  50%
  {
    opacity: 0.60;
  }
  75%
  {
    opacity: 0.8;
  }
  100%
  {
    opacity: 1.0;
  }
`;
