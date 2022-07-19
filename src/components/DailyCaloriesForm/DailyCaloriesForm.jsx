import { Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
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

export default function DailyCaloriesForm({
  onFormSubmit,
  userInfo = false,
  isCleanUserInfo = false,
  isShowNoti=true,
}) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedBldType, setSelectedBlbType] = useState(() =>
    userInfo ? userInfo.bloodType : '1',
  );

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
    const { height, age, desiredWeight, currentWeight, bloodType } = values;
    if (!height || height < 100 || height > 250) return;
    if (!age || age < 18 || age > 100) return;
    if (!currentWeight || currentWeight < 20 || currentWeight > 500) return;
    if (!desiredWeight || desiredWeight < 20 || desiredWeight > 500) return;
    if (!bloodType) values.bloodType = selectedBldType;

    setIsFormValid(true);
  };

  return (
    <Formik
      initialValues={inivialValues}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        if (!isFormValid) return;

        const user = {
          userData: {
            height: String(values.height),
            age: String(values.age),
            currentWeight: String(values.currentWeight),
            desiredWeight: String(values.desiredWeight),
            bloodType: String(values.bloodType),
          },
        };

        if (onFormSubmit(user) && isShowNoti) {
          toast.success("Your diet is ready!");
          window.scrollTo(0, document.body.scrollHeight);
        } 
        
        onFormSubmit(user);
        
        if (isCleanUserInfo) {
          resetForm();
        }
      }}
    >
      <FormDiv>
        <FormP>Розрахуйте свою денну норму калорій прямо зараз</FormP>
        <DCForm>
          <LblDiv1>
            <FormLabel htmlFor="height">
              Зріст*
              <TextInp
                pattern="[0-9]{3}"
                required
                id="height"
                type="number"
                name="height"
                min="100"
                max="250"
              />
              <span className="tooltiptext">мін. 100, макс. 250</span>
            </FormLabel>
            <FormLabel htmlFor="age">
              Вік*
              <TextInp
                pattern="[0-9]{2}"
                id="age"
                required
                type="number"
                name="age"
                min="18"
                max="100"
              />
              <span className="tooltiptext">мін. 18, макс. 100</span>
            </FormLabel>
            <FormLabel htmlFor="currentWeight">
              Поточна вага*
              <TextInp
                pattern="[0-9]{2,3}"
                required
                id="currentWeight"
                type="number"
                name="currentWeight"
                min="20"
                max="500"
              />
              <span className="tooltiptext">мін. 20, макс. 500</span>
            </FormLabel>
          </LblDiv1>
          <LblDiv1>
            <FormLabel htmlFor="desiredWeight">
              Бажана вага*
              <TextInp
                pattern="[0-9]{2,3}"
                id="desiredWeight"
                required
                name="desiredWeight"
                type="number"
                min="20"
                max="500"
              />
              <span className="tooltiptext">мін. 20, макс. 500</span>
            </FormLabel>
            <FormLabel htmlFor="bloodType" required>
              <p style={{ marginBottom: '20px' }}>Група крові*</p>
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
            <Button type={'submit'} btnText="Почніть худнути" />
          </BtnDiv>
        </DCForm>
      </FormDiv>
    </Formik>
  );
}
