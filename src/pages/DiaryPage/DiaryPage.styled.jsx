import styled from 'styled-components';
import { FormBtnBase } from '../../components/DiaryAddProductForm/DiaryAddProductForm.styled';
import { breakpoints } from 'assets/sizes';

export const ContainerDiary = styled.div`
  /* padding-top: 80px;

  @media ${breakpoints.desktop} {
    padding-top: 136px;
  } */
`;

export const SidebarWrap = styled.div`
  @media ${breakpoints.desktop} {
    position: absolute;

    top: 0;
    right: 0;
    width: 520px;
    height: 100vh;
  }
`;

export const AddBtnMobile = styled(FormBtnBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 100%;
  width: 48px;
  height: 48px;
`;
