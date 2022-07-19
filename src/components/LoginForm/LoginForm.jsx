import React from 'react';
import { useFormik } from 'formik';
import {
  ContainerLogin,
  TitleLogin,
  FormLogin,
  FormLoginList,
  FormLoginItem,
  FormLoginLabel,
  FormLoginInput,
  Message,
  ButtonContainer,
  Button,
  StyledLink,
} from './LoginForm.styled';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/app/auth';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Недійсна електронна пошта')
        .min(3, 'Мінімум 3 символи')
        .max(254, 'Максимум 254 символів')
        .required('Обов\'язково'),
      password: Yup.string()
        .min(8, 'Мінімум 8 символів')
        .max(100, 'Максимум 100 символів')
        .matches(
          /[A-z0-9]/,
          'Пароль має містити літери та цифри, без спеціальних символів',
        )
        .required('Обов\'язково'),
    }),
    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.actionLogin({ email, password }));
    },
  });
  return (
    <ContainerLogin>
      <TitleLogin>Увійти</TitleLogin>
      <FormLogin onSubmit={formik.handleSubmit}>
        <FormLoginList>
          <FormLoginItem>
            <FormLoginLabel htmlFor="email">Електронна пошта *</FormLoginLabel>
            <FormLoginInput
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              password
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Message>{formik.errors.email}</Message>
            ) : null}
          </FormLoginItem>
          <FormLoginItem>
            <FormLoginLabel htmlFor="password">Пароль *</FormLoginLabel>
            <FormLoginInput
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormLoginItem>
        </FormLoginList>
        <ButtonContainer>
          <Button type="submit">Увійти</Button>

          <StyledLink to="/register">Зареєструватися</StyledLink>
        </ButtonContainer>
      </FormLogin>
    </ContainerLogin>
  );
};

export default LoginForm;
