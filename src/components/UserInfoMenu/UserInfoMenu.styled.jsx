import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

// css for mobile

export const InfoPosition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background-color: #eff1f3;
  height: 40px;
  justify-content: space-between;
  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const Vertical = styled.div`
  border-left: 2px solid #e0e0e0;
  height: 32px;
  margin-top: 4px;
`;

export const UserInfoExit = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const UserNameStyled = styled.button`
  border: none;
  margin-right: 16px;
`;

export const ExitButton = styled.button`
  border: none;
  margin-left: 16px;
  color: #9b9faa;
  cursor: pointer;
`;

export const BackButton = styled.button`
  margin-left: 20px;
  border: none;
  cursor: pointer;
`;

// css for LapTop

export const InfoPositionLapTop = styled.div`
  @media ${breakpoints.maxTablet} {
    display: none;
  }
  @media ${breakpoints.onlyTablet} {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    height: 40px;
    justify-content: space-between;
    margin-left: auto;
  }
  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    height: 40px;
    justify-content: space-between;
    margin-left: auto;
    margin-top: 100px;
  }
`;

export const VerticalLapTop = styled.div`
  border-left: 2px solid #e0e0e0;
  height: 32px;
  margin-top: 4px;
`;

export const UserInfoExitLapTop = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 50px;
`;

export const UserNameButtonLapTop = styled.button`
  border: none;
  margin-right: 16px;
  background-color: inherit;
`;

export const ExitButtonLapTop = styled.button`
  border: none;
  margin-left: 16px;
  color: #9b9faa;
  background-color: inherit;
`;

// css for SignIn and Registration

export const PositionFormSigIn = styled.div`
  margin-right: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakpoints.desktop} {
  }
`;
export const VerticalDesktop = styled.div`
  @media ${breakpoints.desktop} {
    border-left: 2px solid #e0e0e0;
    height: 32px;
    margin-top: 4px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const PositionSignIn = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SignInStyle = styled.li`
  margin-right: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: #9b9faa;
  @media ${breakpoints.desktop} {
    margin: 10px;
  }
`;

export const RegistrStyle = styled.li`
  text-transform: uppercase;
  color: #9b9faa;
  font-weight: 700;
  @media ${breakpoints.desktop} {
    margin: 10px;
  }
`;
