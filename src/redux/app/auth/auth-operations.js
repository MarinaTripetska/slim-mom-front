import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientAPI } from 'service/axios.config';
import tokenService from 'service/token.service';

// const tokens = {
//   set(tokens) {
//     localStorage.setItem('AUTH_TOKEN', tokens.accessToken);
//     localStorage.setItem('REFRESH_TOKEN', tokens.refreshToken);
//     // axios.defaults.headers.Authorization = `Bearer ${tokens.accessToken}`;
//   },
//   unset() {
//     // axios.defaults.headers.Authorization = '';
//     localStorage.removeItem('AUTH_TOKEN');
//     localStorage.removeItem('REFRESH_TOKEN');
//   },
// };

const actionRegister = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const response = await clientAPI.register(payload);
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
      const { data } = await clientAPI.login(payload);
      // console.log(data.data);
      tokenService.setLocalTokens(data.data.tokens);
      // tokens.set(data.data.tokens);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const actionLogout = createAsyncThunk('auth/loout', async (_, thunkAPI) => {
  try {
    await clientAPI.logout();
    tokenService.removeLocalTokens();
    // tokens.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const actionCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await clientAPI.current();
      // tokenService.setLocalTokens(data.data.tokens);
      // tokens.set(data.data.tokens);
      return data.data;
    } catch (err) {
      // console.log(err.response);

      return rejectWithValue(err.response.data);
    }
  },
);

// export const actionRefreshToken = createAsyncThunk(
//   'auth/refresh-token',
//   async payload => {
//     try {
//       const { data } = await clientAPI.refreshToken(payload);
//       tokenService.setLocalTokens(data.data.tokens);
//       return data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );

export const getUsersAdvice = createAsyncThunk(
  'auth/adviceForLoginUsers',
  async credentials => {
    try {
      const { data } = await clientAPI.adviceForLoginUser(credentials);
      return data.user;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const authOperations = {
  actionRegister,
  actionCurrent,
  actionLogin,
  actionLogout,
  // actionRefreshToken,
  getUsersAdvice,
};
