import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors } from 'redux/app/auth';
import IconBack from '../../assets/images/arrow-mobile.png';
import { authOperations } from 'redux/app/auth';
// import { Rings } from 'react-loader-spinner';
import ChoiceModal from '../../components/ChoiceModal';

import {
  InfoPosition,
  UserNameStyled,
  ExitButton,
  Vertical,
  UserInfoExit,
  BackButton,
} from './UserInfoMenu.styled';

export const UserInfoMenuMobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);
  // const isLoadingLogout = useSelector(authSelectors.getIsLoading);
  const [isShowChoiceModal, setIsShowChoiceModal] = useState(false);

  const choiceHandler = answer => {
    if (answer) {
      dispatch(authOperations.actionLogout()).then(() => {
        navigate('/login', { replace: true });
      });
    }
  };

  const handleLogout = () => {
    setIsShowChoiceModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModalHandle = () => {
    setIsShowChoiceModal(false);
  };

  return (
    <InfoPosition>
      {isShowChoiceModal && (
        <ChoiceModal
          text={'що хочете вийти зі свого облікового запису'}
          choiceHandler={choiceHandler}
          closeModalHandle={closeModalHandle}
        />
      )}
      <BackButton onClick={() => navigate(-1)}>
        <img src={IconBack} alt="IconBack" width={12} height={7} />
      </BackButton>

      <UserInfoExit>
        <UserNameStyled>{userName}</UserNameStyled>
        <Vertical></Vertical>
        <ExitButton onClick={handleLogout}>
          {/* {isLoadingLogout ? ( */}
          {/* <Rings color="#FC842D" height={50} width={50} /> */}
          {/* ) : ( */}
          Вихід
          {/* )} */}
        </ExitButton>
      </UserInfoExit>
    </InfoPosition>
  );
};
