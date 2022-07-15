import { NavLink, useNavigate } from 'react-router-dom';
import {
    InfoPosition,
    UserNameButton,
    ExitButton,
    Vertical,
    UserInfoExit,
    BackButton,
    InfoPositionLapTop,
    UserNameButtonLapTop,
    VerticalLapTop,
    VerticalDesktop,
    UserInfoExitLapTop,
    ExitButtonLapTop,
    PositionSignIn,
    PositionFormSigIn,
    SignInStyle,
    RegistrStyle
}
    from './UserInfoMenu.styled';
import './UserInfoMenu.css';
// import { login, current } from '../../service/axios.config';
// import { getUserName } from '../../redux/app/auth/auth-selectors';
import IconBack from '../../assets/images/arrow-mobile.png';
import { useState } from 'react';
// import RegistrationForm from '../RegistrationForm';

export const UserInfoMenuMobile = ({ userName = 'No name', logOut = '/home' }) => {
    const navigate = useNavigate();
        return (
            <InfoPosition>
            <BackButton onClick={() => navigate(-1)}>
                <img src={IconBack}
                    alt="IconBack"
                    width={12}
                    height={7}
                />
            </BackButton>
            <UserInfoExit>
                <UserNameButton><NavLink to='/calculator'>{userName}</NavLink></UserNameButton>
                <Vertical></Vertical>
                <ExitButton onClick={() => console.log("NEED LOGOUT FUNCTION")}>
                    <NavLink to={logOut}>Exit</NavLink>
                </ExitButton>
            </UserInfoExit>
        </InfoPosition>
        )
};
// Non Authenticate User
export const UserInfoMenuLapTop = ({ userName = 'No name', logOut = '/home' }) => {
        return (
            <InfoPositionLapTop>
            <UserInfoExitLapTop>
                <UserNameButtonLapTop>
                    <NavLink to='/calculator'>{userName}</NavLink>
                </UserNameButtonLapTop>
                <VerticalLapTop></VerticalLapTop>
                <ExitButtonLapTop onClick={() => console.log("NEED LOGOUT FUNCTION")}>
                    <NavLink to={logOut}>Exit</NavLink>
                </ExitButtonLapTop>
            </UserInfoExitLapTop>
        </InfoPositionLapTop>
        )
};