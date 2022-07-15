import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavPosition = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: stretch;
  align-content: space-between;
  justify-content: space-between;
  border-bottom: 2px solid #E0E0E0;
    @media ${breakpoints.desktop}{
      justify-content: start;
  }
`;

export const Home = styled(NavLink)`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  margin-top: 12px;
  margin-left: 20px;
    @media ${breakpoints.onlyTablet}{
      margin-left: 32px;
  }
    @media ${breakpoints.desktop} {
      margin-top: 80px
    }
`;

export const MomStyle = styled.span`
    color: #fc842d;
`;

export const ButtonBurger = styled.button`
  display: block;
  height: 20px;
  transform-origin: 16px 11px;
  float: left;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 20px;
  outline: 0;
  border: 0;
  padding: 0px;
  background: none;
    @media ${breakpoints.onlyTablet}{
      margin-right: 32px;
  }
    @media ${breakpoints.desktop}{
      display: none;
  }
`;

export const SlimStyle = styled.p`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.04em;
  padding-left: 8px;
  align-items: center;
  @media ${breakpoints.maxTablet}{
      display: none;
    }
  @media ${breakpoints.desktop}{
    margin-top: 65px;
    margin-left: -18px;
  }
`;
export const SlimStyleForLogin = styled.p`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.04em;
  padding-left: 8px;
  align-items: center;
  @media ${breakpoints.desktop}{
    margin-top: 40px;
    margin-left: -18px;
  }
`;

export const PositionSlimMomLog = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgPosition = styled.img`
    margin-top: 8px;
    width: 44px;
    height: 46px;
  @media ${breakpoints.desktop} {
    width: 66px;
    height: 70px;
    margin-top: -8px;
    }
`;

export const NavPositionLog = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: stretch;
  align-content: space-between;
  justify-content: space-between;
  border-bottom: 2px solid #E0E0E0;
    @media ${breakpoints.desktop}{
      height: 150px;
        border-bottom: none;}
`;

export const LoginRegistrPosition = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  @media ${breakpoints.desktop}{
      display: none;
    }
`;

export const LoginRegistrStyle = styled(NavLink)`
  color: #9B9FAA;
  text-transform: uppercase;
  margin-left: 16px;
  &.active{
    color: black;
  }
`;