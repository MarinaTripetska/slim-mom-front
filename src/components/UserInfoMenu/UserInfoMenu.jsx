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
import IconBack from '../../assets/images/arrow-mobile.png';
import { useState } from 'react';
// import RegistrationForm from '../RegistrationForm';

export const UserAuthenticate = () => {
    const [userLogIn, setUserLogIn] = useState(false);
    const signInLink = '/login';
    const registrationLink = '/register';
    if (!userLogIn) {
        return (
            <PositionFormSigIn>
                <PositionSignIn>
                    <VerticalDesktop/>
                    <SignInStyle><NavLink to={signInLink} activeclassname="active">sign in</NavLink></SignInStyle>
                    <RegistrStyle><NavLink to={registrationLink} activeclassname="active">registration</NavLink></RegistrStyle>
                </PositionSignIn>
            </PositionFormSigIn >
        )
    }
    console.log(userLogIn);
    return null;
};

export const UserInfoMenuMobile = ({ userName = 'No name', logOut = '/home' }) => {
    const navigate = useNavigate();
    const [userLogIn, setUserLogIn] = useState(false);
    if (userLogIn) {
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
    }
    return null;
};
// Non Authenticate User
export const UserInfoMenuLapTop = ({ userName = 'No name', logOut = '/home' }) => {
        const [userLogIn, setUserLogIn] = useState(false);
    if (userLogIn) {
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
    }
    return null;
};