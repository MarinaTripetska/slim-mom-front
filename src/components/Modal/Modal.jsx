import { useEffect } from 'react';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  KcalCount,
  ProdList,
} from './Modal.styles';
import Button from '../Button';

function Modal({ closeModalHandle }) {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const escKeyHandle = event => {
    if (event.keyCode === 27) {
      closeModalHandle();
    }
  };

  const onClickOvrlHandle = event => {
    if (event.target.id === 'modal-overlay') {
      closeModalHandle();
    }
  };
  const onBtnClickHandle = () => {
    //...
    closeModalHandle();
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <ModalTtl>Your recommended daily calorie intake is</ModalTtl>
        <KcalCount>
          2800<span> ккал</span>
        </KcalCount>
        <ProdList>
          <p>Foods you should not eat</p>
          <li>Flour products</li>
          <li>Milk</li>
          <li>Red meat</li>
          <li>Smoked meats</li>
        </ProdList>
        <Button
          onClickHandler={onBtnClickHandle}
          btnText="Start losing weight"
        />
      </ModalDiv>
    </Overlay>
  );
}

export default Modal;
