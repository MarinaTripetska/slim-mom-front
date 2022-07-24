import { useEffect } from 'react';

import Button from '../Button';
import CloseBtn from '../CloseBtn/CloseBtn';

import {
  Overlay,
  ModalDiv,
  ModalTtl,
  Text,
  CloseModalBtn,
  ContentWrap,
  BtnWrapper,
} from './ChoiceModal.styled';

function ChoiceModal({ text, choiceHandler, closeModalHandle, subText }) {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
  });

  const escKeyHandle = event => {
    if (event.keyCode === 27) {
      choiceHandler(false);
      closeModalHandle();
      document.body.style.overflow = 'visible';
    }
  };
  const onClickOvrlHandle = event => {
    if (event.target.id === 'modal-overlay') {
      choiceHandler(false);
      closeModalHandle();
      document.body.style.overflow = 'visible';
    }
  };

  const onOkClickHandle = () => {
    choiceHandler(true);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  const onCancelClickHandle = () => {
    choiceHandler(false);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  const closeModal = () => {
    choiceHandler(false);
    closeModalHandle();
    document.body.style.overflow = 'visible';
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <CloseModalBtn>
          <CloseBtn onHandleClick={closeModal} />
        </CloseModalBtn>

        <ContentWrap>
          <ModalTtl>Ви впевнені, {text}?</ModalTtl>

          <Text>{subText}</Text>

          <BtnWrapper>
            <Button
              // style={{ backgroundColor: 'red' }}
              onClickHandler={onCancelClickHandle}
              btnText="Скасувати"
              autofocus={true}
            />
            <Button
              // style={{ backgraund: "red" }}
              onClickHandler={onOkClickHandle}
              btnText="Підтвердити"
              autofocus={false}
            />
          </BtnWrapper>
        </ContentWrap>
      </ModalDiv>
    </Overlay>
  );
}

export default ChoiceModal;
