import { useEffect } from 'react';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  KcalCount,
  Text,
  ProdList,
  CloseModalBtn,
} from './Modal.styles';
import { changeToUa } from 'helpers/translateProd';
import Button from '../Button';
import CloseBtn from '../CloseBtn/CloseBtn';
import { useNavigate } from 'react-router-dom';

function Modal({
  closeModalHandle,
  userData: { userDailyCalorieIntake, userNotRecommendedProducts },
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
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
    closeModalHandle();
    navigate('/register', { replace: true });
  };

  const closeModal = () => {
    closeModalHandle();
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <ModalTtl>
          Ваша рекомендована добова норма споживання калорій становить
        </ModalTtl>
        <KcalCount>
          {userDailyCalorieIntake}
          <span> ккал</span>
        </KcalCount>
        <Text>Продукти, які Ви не повинні їсти</Text>
        <ProdList>
          {userNotRecommendedProducts?.map(product => (
            <li key={product}>{changeToUa[product]}</li>
          ))}
        </ProdList>
        <Button onClickHandler={onBtnClickHandle} btnText="Почніть худнути" />
        <CloseModalBtn>
          <CloseBtn onHandleClick={closeModal} />
        </CloseModalBtn>
      </ModalDiv>
    </Overlay>
  );
}

export default Modal;
