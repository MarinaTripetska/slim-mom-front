import { useEffect } from 'react';
// import { getAdviceToModal } from 'redux/app/users/users-selectors';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  KcalCount,
  ProdList,
} from './Modal.styles';
import Button from '../Button';

// import { useSelector } from 'react-redux';

// closeModalHandle
function Modal({
  closeModalHandle,
  userData: { userDailyCalorieIntake, userNotRecommendedProducts },
}) {
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
  };

  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <ModalTtl>Your recommended daily calorie intake is</ModalTtl>
        <KcalCount>
          {userDailyCalorieIntake}
          <span> ккал</span>
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
