import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

import AsyncSelect from 'react-select/async';

export const MobileAddProductFormWraper = styled.div`
  @media ${breakpoints.maxMobile} {
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    padding: 70px 20px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const FormLabel = styled.label`
  width: 100%;

  @media ${breakpoints.minTablet} {
    width: auto;
  }
`;

export const FormInputProduct = styled(AsyncSelect)`
  color: var(--main-text-color);
  margin-bottom: 32px;

  @media ${breakpoints.minTablet} {
    margin-right: 22px;
    margin-bottom: 0;
    width: 240px;
  }

  @media ${breakpoints.desktop} {
    margin-right: 48px;
  }

  .react-select__control {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 0;

    &:hover {
      border-bottom-color: var(--main-text-color);
    }

    &--is-focused {
      outline: none;
      border-bottom-color: var(--main-text-color);
      box-shadow: none;
    }
  }

  .react-select__value-container {
    margin: 0;
    padding: 8px 0;

    @media ${breakpoints.minTablet} {
      padding-bottom: 20px;
    }
  }

  .react-select__input-container {
    margin: 0;
    padding: 0;
  }

  .react-select__placeholder {
    color: var(--secondary-text-color);
  }

  .react-select__indicators {
    display: none;
  }
`;

export const FormInputWeight = styled.input`
  margin-bottom: 60px;
  color: var(--main-text-color);
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  transition: border-color 0.3s;

  ::placeholder {
    color: var(--secondary-text-color);
  }

  &:focus,
  &:hover {
    border-bottom-color: var(--main-text-color);
  }

  @media ${breakpoints.minTablet} {
    width: 106px;
    margin-bottom: 0;
    padding-bottom: 20px;
    text-align: end;
    margin-right: 87px;
  }

  @media ${breakpoints.desktop} {
    margin-right: 60px;
  }
`;

export const FormBtnBase = styled.button`
  display: inline-block;
  background: ${props => (props.primary ? '#FC842D' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#FC842D')};
  box-shadow: ${props =>
    props.primary ? '0 4px 10px var(--accent-shadow)' : null};
  border: 2px solid var(--accent-color);

  width: 176px;
  height: 44px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;

  margin-top: 60px;

  &:hover {
    background: ${props => (props.primary ? '#fff' : '#FC842D')};
    color: ${props => (props.primary ? '#FC842D' : '#fff')};
    box-shadow: var(--accent-shadow);
  }

  &:disabled {
    /* pointer-events: none; */
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const FormBtnMobile = styled(FormBtnBase)`
  display: block;

  @media ${breakpoints.minTablet} {
    display: none;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const FormBtn = styled(FormBtnBase)`
  display: none;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;

  @media ${breakpoints.minTablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding: 0;
  }
`;
