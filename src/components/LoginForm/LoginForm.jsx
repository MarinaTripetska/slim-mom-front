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
} from './LoginForm.styled';

import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(6, 'Min 6 symbols')
        .max(10, 'Max 10 symbols')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
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

          <Button type="submit">Register</Button>
        </ButtonContainer>
      </FormLogin>
    </ContainerLogin>
  );
};

export default LoginForm;
