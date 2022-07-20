import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/app/auth';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

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

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Мінімум 3 символи')
        .max(254, 'Максимум 254 символів')
        .matches(
          /[A-z]/,
          'Будь ласка, виберіть англійську розкладку клавіатури',
        )
        .required("Обов'язково"),
      email: Yup.string()
        .email('Недійсна електронна пошта')

        .max(254, 'Максимум 254 символів')

        .matches(
          /([a-z0-9_.-]{3,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
          'Електронна пошта має містити мінімум 3 символи',
        )
        .required("Обов'язково"),
      password: Yup.string()
        .min(8, 'Мінімум 8 символів')
        .max(100, 'Максимум 100 символів')
        .matches(
          /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}/,
          // .matches(
          //   /(?=.*[0-9])(?=.*[a-z]{8,})/,
          'Пароль повинен складатися з латинських літер та цифр без спеціальних символів',
        )
        .required("Обов'язково"),
    }),

    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(authOperations.actionRegister({ name, email, password })).then(
        ({ payload }) => {
          if (payload?.code === 201) {
            navigate('/login', { replace: true });
          }
        },
      );

      formik.resetForm();
    },
  });

  return (
    <ContainerRegistr>
      <TitleRegistr>Реєстрація</TitleRegistr>
      <FormRegistr onSubmit={formik.handleSubmit}>
        <FormRegistrList>
          <FormRegistrItem>
            <FormRegistrLabel htmlFor="name">Ім'я *</FormRegistrLabel>
            <FormRegistrInput
              id="name"
              name="name"
              type="text"
              // pattern="([A-z])"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Message>{formik.errors.name}</Message>
            ) : null}
          </FormRegistrItem>
          <FormRegistrItem>
            <FormRegistrLabel htmlFor="email">
              Електронна пошта *
            </FormRegistrLabel>
            <FormRegistrInput
              id="email"
              name="email"
              type="text"
              //pattern="([a-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
              //title="Електронна пошта повинна складатися з малих латинських літер, цифр і без спеціальних символів."
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Message>{formik.errors.email}</Message>
            ) : null}
          </FormRegistrItem>
          <FormRegistrItem>
            <FormRegistrLabel htmlFor="password">Пароль *</FormRegistrLabel>
            <FormRegistrInput
              id="password"
              name="password"
              type="password"
              pattern="((?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,})"
              title="Пароль повинен складатися з латинських літер та цифр без спеціальних символів"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormRegistrItem>
        </FormRegistrList>
        <ButtonContainer>
          <RegistrButton type="submit">Зареєструватися</RegistrButton>

          <StyledNavLink to="/login">Увійти</StyledNavLink>
        </ButtonContainer>
      </FormRegistr>
    </ContainerRegistr>
  );
};
export default RegistrationForm;
