import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { register } from 'service/axios.config';

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
  async (userData, thunkAPI) => {
    try {
      const response = await register(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const login = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', payload);
    token.set(data.token);
    return data;
  } catch (error) {
    if ((error.status = 401)) {
      return thunkAPI.rejectWithValue('Email or password is wrong');
    }
  }
});

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

export const authOperations = { actionRegister, login, logout };
