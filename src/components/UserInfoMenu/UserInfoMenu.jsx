import { NavLink, useNavigate } from 'react-router-dom';
import {
  InfoPosition,
  UserNameButton,
  ExitButton,
  Vertical,
  UserInfoExit,
  BackButton,
} from './UserInfoMenu.styled';

import { authSelectors } from 'redux/app/auth';
import IconBack from '../../assets/images/arrow-mobile.png';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/app/auth';

export const UserInfoMenuMobile = ({ logOut = '/'}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);

  return (
    <InfoPosition>
      <BackButton onClick={() => navigate(-1)}>
        <img src={IconBack} alt="IconBack" width={12} height={7} />
      </BackButton>
      <UserInfoExit>
        <UserNameButton>
          <NavLink to="/calculator">{userName}</NavLink>
        </UserNameButton>
        <Vertical></Vertical>
        <ExitButton onClick={() => dispatch(authOperations.actionLogout())}>
          <NavLink to={logOut}>Exit</NavLink>
        </ExitButton>
      </UserInfoExit>
    </InfoPosition>
  );
};