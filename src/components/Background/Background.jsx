import { Background } from './Background.styled';
import { createPortal } from 'react-dom';

const backRoot = document.querySelector('#backRoot');

const Back = () => {
  return createPortal(<Background />, backRoot);
};

export default Back;
