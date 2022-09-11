import styled from 'styled-components';
import { Field, Form } from 'formik';
import { breakpoints } from '../../assets/sizes';

const FormDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 610px;
  padding-left: 20px;
  padding-right: 20px;

  @media ${breakpoints.minTablet} {
    padding-left: 32px;
    padding-right: 0;
  }

  @media ${breakpoints.desktop} {
    padding-left: 16px;
  }
`;

const DCForm = styled(Form)`
  display: flex;
  flex-flow: row wrap;
`;

const LblDiv1 = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  @media ${breakpoints.minTablet} {
    max-width: 240px;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

const FormP = styled.p`
  /* margin-left: 30px; */
  font-size: 18px;
  font-family: 'Verdana';
  font-style: normal;
  line-height: 1.206;
  font-weight: 700;
  color: var(--main-text-color);

  @media (min-width: 768px) {
    font-size: 34px;
    line-height: 1.444;
  }
`;

const FormLabel = styled.label`
  position: relative;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: var(--secondary-text-color);
  /* margin-left: 32px; */
  margin-top: 40px;
  width: 100%;

  @media (max-width: 320px) {
    margin-top: 32px 0 0;
  }

  & .tooltiptext {
    visibility: hidden;
    width: fit-content;
    background-color: var(--accent-color);
    color: var(--white);
    text-align: center;
    border-radius: 6px;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    /* left: 50%; */
    /* margin-left: -60px; */

    /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
    opacity: 0;
    transition: opacity 1s;
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const TextInp = styled(Field)`
  display: block;
  border: none;
  width: 100%;
  border-bottom: 1px solid rgb(224, 224, 224);

  &:focus,
  &:hover {
    outline: none;
  }

  &:focus,
  :hover + :valid {
    border-bottom: 1px solid rgba(0, 255, 55, 0.671);
  }

  &:focus,
  :hover + :invalid {
    border-bottom: 1px solid rgba(255, 0, 0, 0.671);
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const BlList = styled.ul`
  /* font-family: 'Verdana'; */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: var(--secondary-text-color);
  border-top: 1px solid var(--border-color);
  /* margin-top: 20px; */
  padding: 8px 0 12px;
  display: inline-flex;
  width: 100%;
  flex-flow: row wrap;
`;

const RadioInp = styled(Field)`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label {
    color: var(--accent-color);
  }

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    margin-left: 24px;

    &::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid var(--border-color);
      border-radius: 50%;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--border-color);
  }
  /* &:focus + label {
    outline: auto;
  } */

  &:checked + label::before {
    text-align: center;
    background-image: url("data:image/svg+xml,%3Csvg width='48px' height='48px' viewBox='0 0 48 48' fill='%23fc842d' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='20' stroke='%23fc842d' stroke-width='4'/%3E%3C/svg%3E%0A");
  }

  &:disabled + label::before {
    background-color: #e9ecef;
  }
`;

const BtnDiv = styled.div`
  // margin-top: 60px;

  // margin-left: 32px;
  // padding-bottom: 60px;
  // @media (max-width: 768px) {
  //   margin: 40px auto 0 auto;
  //   //padding-bottom: 60px;
  //   @media (min-width: 1280px) {
  //     margin-left: auto;
  //   }
  // }
  margin: 40px auto 100px auto;

  @media ${breakpoints.minTablet} {
    margin: 60px auto 100px 32px;
  }

  @media ${breakpoints.desktop} {
    margin: 60px 0px 100px 339px;
  }
`;

export {
  FormDiv,
  DCForm,
  FormLabel,
  FormP,
  LblDiv1,
  TextInp,
  BlList,
  RadioInp,
  BtnDiv,
};
