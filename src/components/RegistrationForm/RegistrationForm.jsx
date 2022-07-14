import React from 'react';
import { useFormik } from 'formik';
import Button from 'components/Button';
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
  StyledNavLink,
} from './RegistrationForm.styled';

import * as Yup from 'yup';

const RegistrationForm = () => {
  //const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Min 3 symbols')
        .max(254, 'Max 254 symbols')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .min(3, 'Min 3 symbols')
        .max(254, 'Max 254 symbols')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Min 8 symbols')
        .max(100, 'Max 100 symbols')
        .required('Required'),
    }),
    onSubmit: values => {
      formik.resetForm();
      console.log(values);
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
              pattern="([A-z])"
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
              pattern="([A-z0-9])"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormRegistrItem>
        </FormRegistrList>
        <ButtonContainer>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <Button type="submit" btnText={'Register'}></Button>
          {/* <RegistrButton type="submit">Register</RegistrButton> */}
        </ButtonContainer>
      </FormRegistr>
    </ContainerRegistr>
  );
};
export default RegistrationForm;
