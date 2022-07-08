import styled from 'styled-components';
import Button from './Button';
import { toast } from 'react-toastify';

const FormDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 610px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
`;

const LblDiv1 = styled.div`
  display: flex;
  flex-flow: column;
`;

const FormP = styled.p`
  margin-left: 30px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.206;
  color: #212121;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 1.444;
  }
`;

const FormLabel = styled.label`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-left: 32px;
  margin-top: 40px;
  @media (max-width: 320px) {
    margin-top: 32px 0 0;
  }
`;

const TextInp = styled.input`
  display: block;
  border: none;
  width: 240px;
  border-bottom: 1px solid #e0e0e0;
`;

const BlList = styled.ul`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #9b9faa;
  border-top: 1px solid #e0e0e0;
  /* margin-top: 20px; */
  padding: 8px 0 12px;
  display: inline-flex;
  width: 240px;
  flex-flow: row wrap;
`;

const RadioInp = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked + label {
    color: #fc842d;
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
      border: 1px solid #e0e0e0;
      border-radius: 50%;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #e0e0e0;
  }

  &:checked + label::before {
    text-align: center;
    background-image: url("data:image/svg+xml,%3Csvg width='48px' height='48px' viewBox='0 0 48 48' fill='%23fc842d' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='20' stroke='%23fc842d' stroke-width='4'/%3E%3C/svg%3E%0A");
  }
  &:disabled + label::before {
    background-color: #e9ecef;
  }
`;

const BtnDiv = styled.div`
  margin-top: 60px;
  margin-left: 350px;
  @media (max-width: 768px) {
    margin: 60px auto;
  }
`;
export default function DailyCaloriesForm({ onBtnClick }) {
  const BldCheck = () => {
    const bld = document.getElementsByName('blood-inp');
    let checked = false;
    for (let i = 0; i < bld.length; i++) {
      if (bld[i].checked === true) checked = true;
    }
    if (!checked) {
      toast('Please choose your blood type');
      return false;
    }
    return true;
  };
  const formValidation = () => {
    const height = document.getElementsByName('height-inp');
    const age = document.getElementsByName('age-inp');
    const curWeight = document.getElementsByName('cur-weight-inp');
    const desWeight = document.getElementsByName('des-weight-inp');
    if (!height[0].validity.valid) {
      toast.error('Height is invalid');
      return false;
    }
    if (!age[0].validity.valid) {
      toast.error('Age is invalid');
      return false;
    }
    if (!curWeight[0].validity.valid) {
      toast.error('Current weight is invalid');
      return false;
    }
    if (!desWeight[0].validity.valid) {
      toast.error('Desired weight is invalid');
      return false;
    }
    return true;
  };
  const onSubmit = event => {
    event.preventDefault();

    if (!formValidation() || !BldCheck()) return;

    //...
    onBtnClick();
  };
  return (
    <>
      <FormDiv>
        <FormP>Calculate your daily calorie intake right now</FormP>
        <Form action="submit">
          <LblDiv1>
            <FormLabel htmlFor="height-inp">
              Height*
              <TextInp
                pattern="[0-9]{3}"
                required
                type="text"
                name="height-inp"
              />
            </FormLabel>
            <FormLabel htmlFor="age-inp">
              Age*
              <TextInp pattern="[0-9]{2}" required type="text" name="age-inp" />
            </FormLabel>
            <FormLabel htmlFor="cur-weight-inp">
              Current weight*
              <TextInp
                pattern="[0-9]{2,3}"
                required
                type="text"
                name="cur-weight-inp"
              />
            </FormLabel>
          </LblDiv1>
          <LblDiv1>
            <FormLabel htmlFor="des-weight-inp">
              Desired weight*
              <TextInp
                pattern="[0-9]{2,3}"
                required
                type="text"
                name="des-weight-inp"
              />
            </FormLabel>
            <FormLabel htmlFor="blood-inp" required>
              <p style={{ marginBottom: '20px' }}>Blood type*</p>
              <BlList>
                <li>
                  <RadioInp
                    type="radio"
                    name="blood-inp"
                    id="blood-inp-1"
                    value={1}
                  />
                  <label htmlFor="blood-inp-1">1</label>
                </li>
                <li>
                  <RadioInp
                    type="radio"
                    name="blood-inp"
                    id="blood-inp-2"
                    value={2}
                  />
                  <label htmlFor="blood-inp-2">2</label>
                </li>
                <li>
                  <RadioInp
                    type="radio"
                    name="blood-inp"
                    id="blood-inp-3"
                    value={3}
                  />
                  <label htmlFor="blood-inp-3">3</label>
                </li>
                <li>
                  <RadioInp
                    type="radio"
                    name="blood-inp"
                    id="blood-inp-4"
                    value={4}
                  />
                  <label htmlFor="blood-inp-4">4</label>
                </li>
              </BlList>
            </FormLabel>
          </LblDiv1>

          <BtnDiv>
            <Button
              type="submit"
              onClickHandler={onSubmit}
              btnText="Start losing weight"
            />
          </BtnDiv>
        </Form>
      </FormDiv>
    </>
  );
}
