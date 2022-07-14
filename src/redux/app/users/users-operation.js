import { createAsyncThunk } from '@reduxjs/toolkit';
// import { adviceForUser } from 'service/axios.config';
import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = `http://localhost:3000/api/v1`;

export const getUsersAdvice = createAsyncThunk(
  'users/adviceForUsers',
  async credentials => {
    try {
      const { data } = await axios.post('/users/nutrition-advice', credentials);
      return data;
    } catch (error) {
      toast.error('Ups, something wrong ');
    }
  },
);

// const actionLogin = createAsyncThunk(
//   'auth/login',
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await login(payload);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       if ((error.status = 401)) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       }
//     }
//   },
// );
