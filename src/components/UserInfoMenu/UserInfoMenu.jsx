import { useNavigate } from 'react-router-dom';
import {
  InfoPosition,
  UserNameStyled,
  ExitButton,
  Vertical,
  UserInfoExit,
  BackButton,
} from './UserInfoMenu.styled';

import { authSelectors } from 'redux/app/auth';
import IconBack from '../../assets/images/arrow-mobile.png';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/app/auth';
import { Rings } from 'react-loader-spinner';

export const UserInfoMenuMobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);
  const isLoadingLogout = useSelector(authSelectors.getIsLoading);

  const handleLogout = () => {
    dispatch(authOperations.actionLogout()).then(() => {
      navigate('/login', { replace: true });
    });
  };

  return (
    <InfoPosition>
      <BackButton onClick={() => navigate(-1)}>
        <img src={IconBack} alt="IconBack" width={12} height={7} />
      </BackButton>

      <UserInfoExit>
        <UserNameStyled>{userName}</UserNameStyled>
        <Vertical></Vertical>
        <ExitButton onClick={handleLogout}>
          {isLoadingLogout ? (
            <Rings color="#FC842D" height={50} width={50} />
          ) : (
            'Exit'
          )}
        </ExitButton>
      </UserInfoExit>
    </InfoPosition>
  );
};
