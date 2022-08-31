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

  const onChoiseCancel = () => {
    choiceHandler(false);
    closeModalHandle();
  };
  const onChoiseConfirm = () => {
    choiceHandler(true);
    closeModalHandle();
  };

  const escKeyHandle = e => {
    if (e.code === 'Escape') {
      onChoiseCancel();
    }
  };

  const handeleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onChoiseCancel();
    }
  };

  return (
    <Overlay onClick={handeleOverlayClick}>
      <ModalDiv>
        <CloseModalBtn>
          <CloseBtn onHandleClick={onChoiseCancel} />
        </CloseModalBtn>

        <ContentWrap>
          <ModalTtl>Ви впевнені, {text}?</ModalTtl>

          <Text>{subText}</Text>

          <BtnWrapper>
            <Button
              onClickHandler={onChoiseCancel}
              btnText="Скасувати"
              autofocus
            />
            <Button onClickHandler={onChoiseConfirm} btnText="Підтвердити" />
          </BtnWrapper>
        </ContentWrap>
      </ModalDiv>
    </Overlay>
  );
}

export default ChoiceModal;
