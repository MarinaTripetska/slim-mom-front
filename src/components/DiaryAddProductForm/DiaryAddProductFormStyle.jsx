import styled from 'styled-components';

import AsyncSelect from 'react-select/async';

export const StyledForm = styled.form`
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const FormLabel = styled.label`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const FormInputProduct = styled(AsyncSelect)`
font-size: '14px';
font-family: 'Verdana';
font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--main-text-color);
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-right: 22px;
    margin-bottom: 0;
    width: 240px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 48px;
  }
  .react-select__control {
    border: none;
    border-bottom: 1px solid #E0E0E0;
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
    @media screen and (min-width: 768px) {
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
  font-size: '14px';
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: var(--main-text-color);
  width: 100%;
  padding: 8px 0;
  border:none;
  border-bottom: 1px solid #E0E0E0;
  outline: none;
  transition: border-color 0.3s;
  ::placeholder {
    color: var(--secondary-text-color);
  }
  &:focus {
    border-bottom-color: var(--main-text-color);
  }
  @media screen and (min-width: 768px) {
    width: 106px;
    margin-bottom: 0;
    padding-bottom: 20px;
    text-align: end;
    margin-right: 87px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }
`;

export const FormBtnBase = styled.button`
  font-family: 'Verdana';
  display: inline-block;
  background: ${props => (props.primary ? '#FC842D' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#FC842D')};
  box-shadow: ${props =>
    props.primary ? '0 4px 10px var(--accent-shadow)' : null};
    border: 2px solid var(--accent-color);
    font-size: 14px;
    font-weight: 700;
  width: 176px;
  height: 44px;
  border-radius: 30px;
  transition: background 200ms linear, color 200ms linear;
  cursor: pointer;
  letter-spacing: 0.04em;
  margin-top: 60px;
  :hover {
    background: ${props => (props.primary ? '#fff' : '#FC842D')};
    color: ${props => (props.primary ? '#FC842D' : '#fff')};
    box-shadow: var(--accent-shadow);
  }
  :disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export const FormBtnMobile = styled(FormBtnBase)`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FormBtn = styled(FormBtnBase)`
  display: none;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  flex-grow: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding: 0;
  }
`;
