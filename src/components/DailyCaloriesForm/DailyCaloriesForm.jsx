// import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getUsersAdvice } from '../../redux/app/users/users-operation';
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
  const [selectedBldType, setSelectedBlbType] = useState(false);
  const [formIsValid, setFormIsValid] = useState('');
  // let formIsValidd = false;
  const dispatch = useDispatch();

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
    if (!values.desiredWeight) return;
    if (!values.bloodType) return;
    return (setFormIsValid(true));
  };
  return (
    <>
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '',
        }}
        validate={validate}
        onSubmit={values => {
          const user = {
            userData:{
              height: values.height,
          age: values.age,
          currentWeight: values.currentWeight,
          desiredWeight: values.desiredWeight,
              bloodType: values.bloodType,
            }
          }
          console.log(user)
     
          dispatch(getUsersAdvice(user));
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
              <FormLabel htmlFor="currentWeight">
                Current weight*
                <TextInp
                  pattern="[0-9]{2,3}"
                  required
                  id="currentWeight"
                  type="text"
                  name="currentWeight"
                />
                <span className="tooltiptext">2-3 numbers</span>
              </FormLabel>
            </LblDiv1>
            <LblDiv1>
              <FormLabel htmlFor="desiredWeight">
                Desired weight*
                <TextInp
                  pattern="[0-9]{2,3}"
                  id="desiredWeight"
                  required
                  type="text"
                  name="desiredWeight"
                />
                <span className="tooltiptext">2-3 numbers</span>
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
