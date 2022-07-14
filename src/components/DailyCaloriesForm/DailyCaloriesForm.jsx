// import { toast } from 'react-toastify';
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

export default function DailyCaloriesForm({ onBtnClick = false }) {
  const [selectedBldType, setSelectedBlbType] = useState('1');
  let formIsValid = false;

  const onBldTypeSelect = event => {
    setSelectedBlbType(event.target.value);
  };

  const onSubmit = () => {
    if (!formIsValid) return;
    //...

    onBtnClick();
  };

  const validate = values => {
    const { height, age, desWeight, curWeight, bldType } = values;
    if (!height || height < 100 || height > 250) return;
    if (!age || age < 18 || age > 100) return;
    if (!curWeight || curWeight < 20 || curWeight > 500) return;
    if (!desWeight || desWeight < 20 || desWeight > 500) return;
    if (!bldType) values.bldType = selectedBldType - 0;
    return (formIsValid = true);
  };
  return (
    <>
      <Formik
        initialValues={{
          height: '',
          age: '',
          curWeight: '',
          desWeight: '',
          bldType: '',
        }}
        validate={validate}
        onSubmit={values => {
          //...
          console.log(values);
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
              <FormLabel htmlFor="curWeight">
                Current weight*
                <TextInp
                  pattern="[0-9]{2,3}"
                  required
                  id="curWeight"
                  type="number"
                  name="curWeight"
                  min="20"
                  max="500"
                />
                <span className="tooltiptext">Min 20, max 500</span>
              </FormLabel>
            </LblDiv1>
            <LblDiv1>
              <FormLabel htmlFor="desWeight">
                Desired weight*
                <TextInp
                  pattern="[0-9]{2,3}"
                  id="desWeight"
                  required
                  type="number"
                  name="desWeight"
                  min="20"
                  max="500"
                />
                <span className="tooltiptext">Min 20, max 500</span>
              </FormLabel>
              <FormLabel htmlFor="bldType" required>
                <p style={{ marginBottom: '20px' }}>Blood type*</p>
                <BlList>
                  <li>
                    <RadioInp
                      type="radio"
                      name="bldType"
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
                      name="bldType"
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
                      name="bldType"
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
                      name="bldType"
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
                type="submit"
                onClickHandler={onSubmit}
                btnText="Start losing weight"
              />
            </BtnDiv>
          </DCForm>
        </FormDiv>
      </Formik>
    </>
  );
}
