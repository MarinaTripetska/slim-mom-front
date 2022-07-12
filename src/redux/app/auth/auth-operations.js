import axios from 'axios';
import { createAsyncThunk } from '@redux/toolkit';

axios.defaults.baseURL = 'http://localhost:5050/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      return data;
    } catch (error) {
      if ((error.status = 400)) {
        return thunkAPI.rejectWithValue('Thomethig went wrong. Try again!');
      }
      if ((error.status = 500)) {
        return thunkAPI.rejectWithValue(
          'We have problems with server. Please, try later',
        );
      }
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

export const authOperations = { register, login, logout };
