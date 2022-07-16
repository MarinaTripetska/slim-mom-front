import styled from 'styled-components';
import { FormBtnBase } from '../../components/DiaryAddProductForm/DiaryAddProductFormStyle';

export const ListWrap = styled.div`
  display: flex;
  justify-items: start;
  @media screen and (min-width: 768px) {
    padding: 60px 0 0 0;
  }
`;

export const SidebarWrap = styled.div`
margin-top: auto;
@media screen and (min-width: 1280px) {
  margin-top: 0;
  overflow: hidden;
}
`;

export const PageWrap = styled.div`
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 85px);
  }
  @media screen and (min-width: 1280px) {
    display: flex;
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