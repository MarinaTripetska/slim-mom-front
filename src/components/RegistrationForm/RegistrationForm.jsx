import React from 'react';
import { useFormik } from 'formik';
import {
  ContainerRegistr,
  TitleRegistr,
  FormRegistr,
  FormRegistrList,
  FormRegistrItem,
  FormRegistrLabel,
  FormRegistrInput,
  Message,
  ButtonContainer,
  RegistrButton,
} from './RegistrationForm.styled';

import * as Yup from 'yup';

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Min 3 symbols')
        .max(15, 'Max 15 symbols')
        .required('Required'),
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
    <ContainerRegistr>
      <TitleRegistr>Register</TitleRegistr>
      <FormRegistr onSubmit={formik.handleSubmit}>
        <FormRegistrList>
          <FormRegistrItem>
            <FormRegistrLabel htmlFor="name">Name *</FormRegistrLabel>
            <FormRegistrInput
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Message>{formik.errors.name}</Message>
            ) : null}
          </FormRegistrItem>
          <FormRegistrItem>
            <FormRegistrLabel htmlFor="email">Email *</FormRegistrLabel>
            <FormRegistrInput
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
          </FormRegistrItem>
          <FormRegistrItem>
            <FormRegistrLabel htmlFor="password">Password *</FormRegistrLabel>
            <FormRegistrInput
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormRegistrItem>
        </FormRegistrList>
        <ButtonContainer>
          <RegistrButton type="submit">Login</RegistrButton>

          <RegistrButton type="submit">Register</RegistrButton>
        </ButtonContainer>
      </FormRegistr>
    </ContainerRegistr>
  );
};
