import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  @media ${breakpoints.maxTablet} {
    position: fixed;
    top: 80px;
  }
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalDiv = styled.div`
  /* position: relative; */
  background-color: var(--white);
  width: 672px;
  /* padding: 64px 80px 80px; */
  /* max-height: 573px; */
  /* width: 100%; */
  /* height: 100%; */
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  padding-bottom: 80px;

  @media ${breakpoints.maxTablet} {
    /* position: absolute; */
    /* top: 0px; */
    width: 100vw;
    max-height: 100%;
    /* padding: 0px 20px 20px; */
    height: 100%;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.maxTablet} {
    /* position: absolute; */
    top: 0px;
    width: 100vw;
    max-height: 100%;
    padding: 0px 20px 20px;
    height: 100%;
  }
`;

const CloseBtnWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  background-color: var(--secondary-background-color);
  margin-bottom: 20px;

  @media ${breakpoints.tablet} {
    background-color: var(--white);
  }
`;

const BackButton = styled.button`
  /* margin-left: 20px; */
  padding: 10px;
  border: none;
  cursor: pointer;
  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const CloseModalBtn = styled.div`
  /* width: 100vw; */
  position: absolute;
  top: 10px;
  right: 10px;
  @media ${breakpoints.maxTablet} {
    display: none;
  }
`;

const ModalTtl = styled.h2`
  font-size: 26px;
  text-align: center;
  /* margin: 64px 120px 30px; */
  margin-bottom: 20px;

  @media ${breakpoints.maxTablet} {
    font-size: 18px;
    line-height: 1.4;
    /* margin: 40px 20px; */
  }
`;

const KcalCount = styled.p`
  font-size: 48px;
  text-align: center;
  color: var(--blue-txt-color);
  margin-bottom: 12px;

  border-bottom: 1px solid var(--border-color);
  padding-bottom: 32px;
  width: 280px;

  @media ${breakpoints.tablet} {
    width: 330px;
  }

  & span {
    font-size: 16px;
    line-height: 1.215;
  }
`;

const Text = styled.p`
  width: 280px;
  @media ${breakpoints.tablet} {
    width: 330px;
  }
`;

const ProdList = styled.ol`
  /* padding-top: 12px; */
  /* border-top: 1px solid var(--border-color); */
  text-align: left;
  margin-bottom: 40px;
  padding-left: 0;

  width: 280px;
  @media ${breakpoints.tablet} {
    width: 330px;
  }

  & p {
    margin-bottom: 20px;
  }

  & li {
    color: var(--secondary-text-color);
    font-weight: 400;
    margin-left: 20px;
    padding-left: 0;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export {
  Overlay,
  ModalDiv,
  ModalTtl,
  KcalCount,
  Text,
  ProdList,
  CloseModalBtn,
  CloseBtnWrapper,
  ContentWrap,
  BackButton,
};
