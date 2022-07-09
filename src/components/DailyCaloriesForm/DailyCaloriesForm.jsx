import Button from '../Button';
import { toast } from 'react-toastify';
import {
  FormDiv,
  FormP,
  Form,
  LblDiv1,
  FormLabel,
  TextInp,
  BlList,
  RadioInp,
  BtnDiv,
} from './DailyCaloriesForm.styles';

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
              <span className="tooltiptext">3 numbers</span>
            </FormLabel>
            <FormLabel htmlFor="age-inp">
              Age*
              <TextInp pattern="[0-9]{2}" required type="text" name="age-inp" />
              <span className="tooltiptext">2-3 numbers</span>
            </FormLabel>
            <FormLabel htmlFor="cur-weight-inp">
              Current weight*
              <TextInp
                pattern="[0-9]{2,3}"
                required
                type="text"
                name="cur-weight-inp"
              />
              <span className="tooltiptext">2-3 numbers</span>
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
              <span className="tooltiptext">2-3 numbers</span>
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
