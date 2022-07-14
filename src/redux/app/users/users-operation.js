import { createAsyncThunk } from '@reduxjs/toolkit';
import { adviceForUser } from 'service/axios.config';

export const getUsersAdvice = createAsyncThunk(
  'users/adviceForUsers',
  async credentials => {
    try {
      const res = await adviceForUser(credentials);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  },
);
