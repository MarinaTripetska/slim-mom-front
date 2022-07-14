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
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(8, 'Min 8 symbols')
        .max(100, 'Max 100 symbols')
        .required('Required'),
    }),
    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.actionLogin({ email, password }));
      formik.resetForm();
    },
  });
  return (
    <ContainerLogin>
      <TitleLogin>Sign in</TitleLogin>
      <FormLogin onSubmit={formik.handleSubmit}>
        <FormLoginList>
          <FormLoginItem>
            <FormLoginLabel htmlFor="email">Email *</FormLoginLabel>
            <FormLoginInput
              id="email"
              name="email"
              type="email"
              pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
              onChange={formik.handleChange}
              password
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Message>{formik.errors.email}</Message>
            ) : null}
          </FormLoginItem>
          <FormLoginItem>
            <FormLoginLabel htmlFor="password">Password *</FormLoginLabel>
            <FormLoginInput
              id="password"
              name="password"
              type="password"
              pattern="([A-z0-9])"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormLoginItem>
        </FormLoginList>
        <ButtonContainer>
          <Button type="submit">Login</Button>

          <StyledLink to="/register">Register</StyledLink>
        </ButtonContainer>
      </FormLogin>
    </ContainerLogin>
  );
};

export default LoginForm;
