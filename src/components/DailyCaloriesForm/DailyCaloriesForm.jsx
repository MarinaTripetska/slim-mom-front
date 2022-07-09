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

export default function DailyCaloriesForm({ onBtnClick }) {
  const [selectedBldType, setSelectedBlbType] = useState('');
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
    if (!values.height) return;
    if (!values.age) return;
    if (!values.desWeight) return;
    if (!values.bldType) return;
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
                  type="text"
                  name="height"
                />
                <span className="tooltiptext">3 numbers</span>
              </FormLabel>
              <FormLabel htmlFor="age">
                Age*
                <TextInp
                  pattern="[0-9]{2}"
                  id="age"
                  required
                  type="text"
                  name="age"
                />
                <span className="tooltiptext">2-3 numbers</span>
              </FormLabel>
              <FormLabel htmlFor="curWeight">
                Current weight*
                <TextInp
                  pattern="[0-9]{2,3}"
                  required
                  id="curWeight"
                  type="text"
                  name="curWeight"
                />
                <span className="tooltiptext">2-3 numbers</span>
              </FormLabel>
            </LblDiv1>
            <LblDiv1>
              <FormLabel htmlFor="desWeight">
                Desired weight*
                <TextInp
                  pattern="[0-9]{2,3}"
                  id="desWeight"
                  required
                  type="text"
                  name="desWeight"
                />
                <span className="tooltiptext">2-3 numbers</span>
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
                      // onChange={onBldTypeSelect}
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
                      // onChange={onBldTypeSelect}
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
                      // onChange={onBldTypeSelect}
                    />
                    <label htmlFor="blood-inp-3">3</label>
                  </li>
                  <li>
                    <RadioInp
                      type="radio"
                      name="bldType"
                      id="blood-inp-4"
                      checked={selectedBldType === '4'}
                      // onChange={onBldTypeSelect}
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
