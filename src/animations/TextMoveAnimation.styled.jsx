const { keyframes } = require('styled-components');

export const TextMoveAnimation = keyframes`
  0%,
  25% {
    transform: translateX(0%);
    left: 0%;
  }
  75%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }

`;
