import styled from 'styled-components';
import { FormBtnBase } from '../../components/DiaryAddProductForm/DiaryAddProductForm.styled';
import { breakpoints } from 'assets/sizes';

export const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const ContainerDiary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 40px 0 60px 0;

  @media ${breakpoints.minTablet} {
    gap: 60px;
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

export const SidebarWrap = styled.div`
  @media ${breakpoints.desktop} {
    height: 100%;
    background-color: var(--secondary-background-color);
  }
`;
