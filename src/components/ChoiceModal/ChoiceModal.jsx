import { useEffect } from 'react';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  Text,
  CloseModalBtn,
  ContentWrap,
  BtnWrapper,
} from './ChoiceModal.styled';
import Button from '../Button';
import CloseBtn from '../CloseBtn/CloseBtn';

function ChoiceModal({ text, choiceHandler, closeModalHandle, subText }) {
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const escKeyHandle = event => {
    if (event.keyCode === 27) {
      choiceHandler(false);
      closeModalHandle();
    }
  };
  const onClickOvrlHandle = event => {
    if (event.target.id === 'modal-overlay') {
      choiceHandler(false);
      closeModalHandle();
    }
  };

  const onOkClickHandle = () => {
    choiceHandler(true);
    closeModalHandle();
  };

  const onCancelClickHandle = () => {
    choiceHandler(false);
    closeModalHandle();
  };

  const closeModal = () => {
    choiceHandler(false);
    closeModalHandle();
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <CloseModalBtn>
          <CloseBtn onHandleClick={closeModal} />
        </CloseModalBtn>

        <ContentWrap>
          <ModalTtl>Ви підтверджуєте {text}?</ModalTtl>

          <Text>{subText}</Text>

          <BtnWrapper>
            <Button
              onClickHandler={onCancelClickHandle}
              btnText="Скасувати"
              autofocus={true}
            />
            <Button
              onClickHandler={onOkClickHandle}
              btnText="Прийняти"
              autofocus={false}
            />
          </BtnWrapper>
        </ContentWrap>
      </ModalDiv>
    </Overlay>
  );
}

export default ChoiceModal;
