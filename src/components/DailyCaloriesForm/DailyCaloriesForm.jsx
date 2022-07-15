import { Formik } from 'formik';
import { useState } from 'react';
import Button from '../Button';
import {
  FormDiv,
  FormP,
  DCForm,
  LblDiv1,
  FormLabel,
  TextInp,
  BlList,
  RadioInp,
  BtnDiv,
} from './DailyCaloriesForm.styles';

export default function DailyCaloriesForm({ onFormSubmit, userInfo = false }) {
  const [selectedBldType, setSelectedBlbType] = useState(() =>
    userInfo ? userInfo.bloodType : '1',
  );
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  let formIsValid = false;

  const onBldTypeSelect = event => {
    setSelectedBlbType(event.target.value);
  };

  const inivialValues = userInfo
    ? userInfo
    : {
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: '1',
      };

  const validate = values => {
    const { height, age, desiredWeight, currentWeight, bldType } = values;
    if (!height || height < 100 || height > 250) return setBtnIsDisabled(true);
    if (!age || age < 18 || age > 100) return setBtnIsDisabled(true);
    if (!currentWeight || currentWeight < 20 || currentWeight > 500)
      return setBtnIsDisabled(true);
    if (!desiredWeight || desiredWeight < 20 || desiredWeight > 500)
      return setBtnIsDisabled(true);
    if (!bldType) values.bldType = selectedBldType - 0;
    formIsValid = true;
    if (formIsValid) setBtnIsDisabled(false);
  };

  return (
    <Formik
      initialValues={inivialValues}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        if (!formIsValid) return;

        const user = {
          userData: {
            height: String(values.height),
            age: String(values.age),
            currentWeight: String(values.currentWeight),
            desiredWeight: String(values.desiredWeight),
            bloodType: String(values.bloodType),
          },
        };

        onFormSubmit(user);
        resetForm();
      }}
    >
      <FormDiv>
        <FormP>Calculate your daily calorie intake right now</FormP>
        <DCForm>
          <LblDiv1>
            <FormLabel htmlFor="height">
              Height*
              <TextInp
                pattern="[0-9]{3}"
                required
                id="height"
                type="number"
                name="height"
                min="100"
                max="250"
              />
              <span className="tooltiptext">Min 100, max 250</span>
            </FormLabel>
            <FormLabel htmlFor="age">
              Age*
              <TextInp
                pattern="[0-9]{2}"
                id="age"
                required
                type="number"
                name="age"
                min="18"
                max="100"
              />
              <span className="tooltiptext">Min 18, max 100</span>
            </FormLabel>
            <FormLabel htmlFor="currentWeight">
              Current weight*
              <TextInp
                pattern="[0-9]{2,3}"
                required
                id="currentWeight"
                type="number"
                name="currentWeight"
                min="20"
                max="500"
              />
              <span className="tooltiptext">Min 20, max 500</span>
            </FormLabel>
          </LblDiv1>
          <LblDiv1>
            <FormLabel htmlFor="desiredWeight">
              Desired weight*
              <TextInp
                pattern="[0-9]{2,3}"
                id="desiredWeight"
                required
                name="desiredWeight"
                type="number"
                min="20"
                max="500"
              />
              <span className="tooltiptext">Min 20, max 500</span>
            </FormLabel>
            <FormLabel htmlFor="bloodType" required>
              <p style={{ marginBottom: '20px' }}>Blood type*</p>
              <BlList>
                <li>
                  <RadioInp
                    type="radio"
                    name="bloodType"
                    id="blood-inp-1"
                    value={1}
                    checked={selectedBldType === '1'}
                    onClick={onBldTypeSelect}
                  />
                  <label htmlFor="blood-inp-1">1</label>
                </li>
                <li>
                  <RadioInp
                    type="radio"
                    name="bloodType"
                    id="blood-inp-2"
                    value={2}
                    checked={selectedBldType === '2'}
                    onClick={onBldTypeSelect}
                  />
                  <label htmlFor="blood-inp-2">2</label>
                </li>
                <li>
                  <RadioInp
                    type="radio"
                    name="bloodType"
                    id="blood-inp-3"
                    value={3}
                    checked={selectedBldType === '3'}
                    onClick={onBldTypeSelect}
                  />
                  <label htmlFor="blood-inp-3">3</label>
                </li>
                <li>
                  <RadioInp
                    type="radio"
                    name="bloodType"
                    id="blood-inp-4"
                    checked={selectedBldType === '4'}
                    onClick={onBldTypeSelect}
                    value={4}
                  />
                  <label htmlFor="blood-inp-4">4</label>
                </li>
              </BlList>
            </FormLabel>
          </LblDiv1>

          <BtnDiv>
            <Button
              type={'submit'}
              disabled={btnIsDisabled}
              btnText="Start losing weight"
            />
          </BtnDiv>
        </DCForm>
      </FormDiv>
    </Formik>
  );
}
