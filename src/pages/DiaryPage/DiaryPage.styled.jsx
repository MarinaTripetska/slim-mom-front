import styled from 'styled-components';
import { FormBtnBase } from '../../components/DiaryAddProductForm/DiaryAddProductForm.styled';
import { breakpoints } from 'assets/sizes';

export const ContainerDiary = styled.div`
  @media ${breakpoints.maxTablet} {
    margin: 0 auto;
    width: 320px;
    padding: 0 20px;
  }
  @media ${breakpoints.tablet} {
    width: 768px;
    padding: 0 32px 50px 32px;
  }
  @media ${breakpoints.desktop} {
    padding: 0 136px 0 16px;
  }
`;
export const ListWrap = styled.div`
  display: flex;
  justify-items: start;
  @media screen and (min-width: 768px) {
    padding: 60px 0 0 0;
  }
`;

export const SidebarWrap = styled.div`
  @media ${breakpoints.desktop} {
    margin-top: 0;
    width: 520px;
    position: absolute;
    margin-left: auto;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 0;
  }
`;

export const PageWrap = styled.div`
  @media ${breakpoints.tablet} {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    /* height: calc(100vh - 85px); */
  }
  @media ${breakpoints.desktop} {
    display: flex;
    padding-top: 306px;
  }
`;
export const AddBtnMobile = styled(FormBtnBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  padding: 0;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;
  right: 0;
  left: 0;
`;
// export const ProductsNotice = styled.h3`
export const AlternativeText = styled.h3`
  margin: 20px 0px 0px;
  /* color: var(--secondary-text-color); */
`;

export const LoaderPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 100%;
  padding: 60px;
`;
