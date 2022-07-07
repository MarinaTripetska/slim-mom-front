import { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalDiv = styled.div`
  background-color: #fff;
  max-width: 672px;
  max-height: 573px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  @media (max-width: 767px) {
    position: absolute;
    top: 120px;
    max-height: 100%;
  }
`;

const ModalTtl = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.231;
  text-align: center;
  margin: 64px 120px 30px;
  color: #212121;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 1.444;
    margin: 40px 20px;
  }
`;

const KcalCount = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.208;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
  margin-bottom: 30px;
  & span {
    font-size: 16px;
    line-height: 1.215;
  }
`;

const ProdList = styled.ol`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  padding-top: 12px;
  border-top: 1px solid #e0e0e0;
  text-align: left;
  margin-bottom: 40px;
  padding-left: 0;
  & p {
    margin-bottom: 20px;
  }
  & li {
    color: #9b9faa;
    font-weight: 400;
    margin-left: 20px;
    &:first-child {
    }
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const Button = styled.button`
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  padding: 13px 25px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

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
        <Button onClick={onBtnClickHandle}>Start losing weight</Button>
      </ModalDiv>
    </Overlay>
  );
}

export default Modal;
