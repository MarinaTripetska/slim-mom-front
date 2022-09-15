import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { authOperations } from '../../redux/app/auth';

import { PasswordEyeButton } from 'components/Buttons';
import {
  Thumb,
  Title,
  Form,
  FormList,
  FormItem,
  Label,
  Input,
  Message,
  ButtonsContainer,
  Button,
  StyledNavLink,
} from './RegistrationForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
    <Thumb>
      <Title>Реєстрація</Title>

      <Form onSubmit={formik.handleSubmit}>
        <FormList>
          <FormItem>
            <Label htmlFor="name">Ім'я *</Label>

            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Message>{formik.errors.name}</Message>
            ) : null}
          </FormItem>
          <FormItem>
            <Label htmlFor="email">Електронна пошта *</Label>

            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Message>{formik.errors.email}</Message>
            ) : null}
          </FormItem>

          <FormItem>
            <Label htmlFor="password">Пароль *</Label>

            <Input
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <PasswordEyeButton handleClick={handleClick} show={show} />

            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormItem>
        </FormList>

        <ButtonsContainer>
          <Button type="submit">Зареєструватися</Button>

          <StyledNavLink to="/login">Увійти</StyledNavLink>
        </ButtonsContainer>
      </Form>
    </Thumb>
  );
};
