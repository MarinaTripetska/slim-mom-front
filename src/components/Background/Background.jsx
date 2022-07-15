import { Background } from './Background.styled';
//import { createPortal } from 'react-dom';

//const backRoot = document.querySelector('#backRoot');

// const Back = () => {
//   return createPortal(<Background />, backRoot);
// };

const Back = ({ children }) => {
  return <Background>{children}</Background>;
};

export default Back;
