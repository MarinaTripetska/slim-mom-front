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
    UserInfoExitLapTop,
    ExitButtonLapTop
}
    from './UserInfoMenu.styled'
import IconBack from '../../assets/images/arrow-mobile.png';
// import { useState } from 'react';

// const UserAuthenticate = ({ userName }) => {
//     const [userLogIn, setUserLogIn] = useState(false);
//     const signInLink = '/login';
//     const registrationLink = '/register'
//     if (!userLogIn) {
//         return (
//             <div>
//                 <NavLink to={signInLink}>sign in</NavLink>
//                 <NavLink to={registrationLink}>registration</NavLink>
//             </div >
//         )
//     }
//     console.log(userLogIn);
//     return null;
// };

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
            {/* <UserAuthenticate/> */}
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
                {/* <UserAuthenticate/> */}
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