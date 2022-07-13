import { breakpoints } from 'assets/sizes';
import styled from "styled-components";

// css for mobile

export const InfoPosition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    background-color: #EFF1F3;
    height: 40px;
    justify-content: space-between;
        @media ${breakpoints.tablet}{
      display: none;
  }
`;

export const Vertical = styled.div`
    border-left: 2px solid #E0E0E0;
    height: 32px;
    margin-top: 4px;
`;

export const UserInfoExit = styled.div`
    display: flex;
    margin-right: 20px;
`

export const UserNameButton = styled.button`
    border: none;
    margin-right: 16px;
`;

export const ExitButton = styled.button`
    border: none;
    margin-left: 16px;
    color: #9B9FAA;
`;

export const BackButton = styled.button`
    margin-left: 20px;
    border: none;
`;

// css for LapTop

export const InfoPositionLapTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    height: 40px;
    justify-content: space-between;
    margin-left: auto;
        @media ${breakpoints.desktop}{
      display: none;
  }
`;

export const VerticalLapTop = styled.div`
    border-left: 2px solid #E0E0E0;
    height: 32px;
    margin-top: 4px;
`;

export const UserInfoExitLapTop = styled.div`
    display: flex;
    margin-top: 20px;
    margin-right: 50px;
`

export const UserNameButtonLapTop = styled.button`
    border: none;
    margin-right: 16px;
    background-color: inherit;
`;

export const ExitButtonLapTop = styled.button`
    border: none;
    margin-left: 16px;
    color: #9B9FAA;
    background-color: inherit;
`;
