import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import { getUsersAdvice } from 'redux/app/auth/auth-operations';

import Header from 'components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import SideBar from 'components/SideBar';

import { Section, ContainerBar, ContainerForm } from './CalculatorPage.styled';
import { useEffect } from 'react';
import { diaryPerDayOperation } from 'redux/app/diaryPerDay';
import { useState } from 'react';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString();

  const [ckalConsumed, setCkalConsumed] = useState(0);

  const userInfo = useSelector(authSelectors.getUserInfo);
  const calorie = useSelector(authSelectors.getUserAdviceCalorie);
  const notRecommendProd = useSelector(authSelectors.getUserNotRecommendProd);

  useEffect(() => {
    dispatch(diaryPerDayOperation.actionGetProducts({ date: currentDate }))
      .then(res => {
        const products = res.payload.result.products;
        const ckalConsumed = products
          .map(({ product, weightGrm }) => (weightGrm / 100) * product.calories)
          .reduce((p, c) => p + c, 0);
        return ckalConsumed;
      })
      .then(result => setCkalConsumed(result));
  }, []);

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };

  return (
    <>
      <Header localPage="CalculatorPage" />
      <Section>
        <ContainerForm>
          <DailyCaloriesForm
            onFormSubmit={submitForm}
            userInfo={userInfo}
            isCleanUserInfo={false}
          />
        </ContainerForm>

        <ContainerBar>
          <SideBar
            kcalConsumed={ckalConsumed}
            notRecommendProd={notRecommendProd}
            calorie={calorie}
            date={currentDate}
          />
        </ContainerBar>
      </Section>
    </>
  );
};
export default CalculatorPage;
