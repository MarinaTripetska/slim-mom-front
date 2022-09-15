import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/app/auth';

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
  StyledLink,
} from './LoginForm.styled';
import { PasswordEyeButton } from 'components/Buttons';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Недійсна електронна пошта')
        .min(3, 'Мінімум 3 символи')
        .max(254, 'Максимум 254 символів')
        .required("Обов'язково"),
      password: Yup.string()
        .min(8, 'Мінімум 8 символів')
        .max(100, 'Максимум 100 символів')
        .matches(
          /[A-z0-9]/,
          'Пароль має містити літери та цифри, без спеціальних символів',
        )
        .required("Обов'язково"),
    }),
    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.actionLogin({ email, password }));
    },
  });

  return (
    <Thumb>
      <Title>Увійти</Title>

      <Form onSubmit={formik.handleSubmit}>
        <FormList>
          <FormItem>
            <Label htmlFor="email">Електронна пошта *</Label>
            <Input
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
          <Button type="submit">Увійти</Button>
          <StyledLink to="/register">Зареєструватися</StyledLink>
        </ButtonsContainer>
      </Form>
    </Thumb>
  );
};
