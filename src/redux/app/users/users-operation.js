import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export const getUsersAdvice = createAsyncThunk(
  'users/getNutritionAdvice',
  async credentials => {
    try {
      console.log(credentials);
      const { data } = await axios.get('/users/nutrition-advice', credentials);
      console.log(data);

      console.log(credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);
