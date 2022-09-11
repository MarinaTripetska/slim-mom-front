import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export const ReactPortal = ({
  children,
  wrapperId = 'react-portal-wrapper',
}) => {
  let element = document.getElementById(wrapperId);

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, document.getElementById(wrapperId));
};
