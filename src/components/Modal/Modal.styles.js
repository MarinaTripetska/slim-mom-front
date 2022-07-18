import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';
const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  @media ${breakpoints.maxTablet} {
    position: fixed;
    top: 80px;
  }
  @media ${breakpoints} {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }
`;

const ModalDiv = styled.div`
  background-color: var(--white);
  max-width: 672px;
  max-height: 573px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.maxTablet} {
    position: absolute;
    top: 40px;
    width: 100vw;
    max-height: 100%;
    height: 100%;
  }
`;

const ModalTtl = styled.h2`
  font-size: 26px;
  text-align: center;
  margin: 64px 120px 30px;

  @media ${breakpoints.maxTablet} {
    font-size: 18px;
    line-height: 1.4;
    margin: 40px 20px;
  }
`;

const KcalCount = styled.p`
  font-size: 48px;
  text-align: center;
  color: var(--blue-txt-color);
  margin-bottom: 30px;

  & span {
    font-size: 16px;
    line-height: 1.215;
  }
`;

const ProdList = styled.ol`
  padding-top: 12px;
  border-top: 1px solid var(--border-color);
  text-align: left;
  margin-bottom: 40px;
  padding-left: 0;

  & p {
    margin-bottom: 20px;
  }

  & li {
    color: var(--secondary-text-color);
    font-weight: 400;
    margin-left: 20px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export { Overlay, ModalDiv, ModalTtl, KcalCount, ProdList };
