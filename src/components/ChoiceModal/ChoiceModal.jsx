import { Button, CloseBtn } from 'components/Buttons';
import { useEffect } from 'react';

import {
  Overlay,
  ModalBox,
  Title,
  Text,
  ContentBox,
  ButtonsSet,
} from './ChoiceModal.styled';

export const ChoiceModal = ({ text, choiceHandler, subText }) => {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
  });

  const onChoiceCancel = () => {
    choiceHandler(false);
  };

  const onChoiceConfirm = () => {
    choiceHandler(true);
  };

  const escKeyHandle = e => {
    if (e.code === 'Escape') {
      onChoiceCancel();
    }
  };

  const handelOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onChoiceCancel();
    }
  };

  return (
    <Overlay onClick={handelOverlayClick}>
      <ModalBox>
        <CloseBtn onHandleClick={onChoiceCancel} position="absolute" />

        <ContentBox>
          <Title>Ви впевнені, {text}?</Title>
          <Text>{subText}</Text>

          <ButtonsSet>
            <Button
              onClickHandler={onChoiceCancel}
              btnText="Скасувати"
              autofocus
            />

            <Button onClickHandler={onChoiceConfirm} btnText="Підтвердити" />
          </ButtonsSet>
        </ContentBox>
      </ModalBox>
    </Overlay>
  );
};
