import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login, register, logout, current } from 'service/axios.config';

const token = {
  set(token) {
    localStorage.setItem('AUTH_TOKEN', token);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
    localStorage.removeItem('AUTH_TOKEN');
  },
};

const actionRegister = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const response = await register(payload);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const actionLogin = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      const { data } = await login(payload);

      token.set(data.data.token);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const actionLogout = createAsyncThunk('auth/loout', async (_, thunkAPI) => {
  try {
    await logout();
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const actionCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await current();
      // token.set(data.data.token);
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
// ДЛЯ ЛОКАЛСТОРЕДЖ, ПОКИ НЕ ПРАЦЮЄ
// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Thomething went wrong, Please, login again.');
//     }

//     token.set(persistedToken);

//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       //обработка ошибки error.message
//     }
//   },
// );

export const authOperations = {
  actionRegister,
  actionCurrent,
  actionLogin,
  actionLogout,
};
