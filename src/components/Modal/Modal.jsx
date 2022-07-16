import { useEffect } from 'react';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  KcalCount,
  ProdList,
} from './Modal.styles';
import Button from '../Button';
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
    closeModalHandle();
    navigate('/register', { replace: true });
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <ModalTtl>Your recommended daily calorie intake is</ModalTtl>
        <KcalCount>
          {userDailyCalorieIntake}
          <span> kcal</span>
        </KcalCount>
        <ProdList>
          <p>Foods you should not eat</p>
          <ul>
            {userNotRecommendedProducts?.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ul>
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
