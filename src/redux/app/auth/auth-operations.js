import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login, register } from 'service/axios.config';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
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
      token.set(data.token);
      return data;
    } catch (error) {
      if ((error.status = 401)) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  },
);

const logout = createAsyncThunk('auth/loout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    //
  }
});

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

export const authOperations = { actionRegister, actionLogin, logout };
