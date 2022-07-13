import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api/v1/users';

export const getUsersAdvice = createAsyncThunk(
  'users/getNutritionAdvice',
  async credentials => {
    try {
      const { data } = await axios.get('/getNutritionAdvice', credentials);
      //   console.log(credentials);
      console.log(data);
      return data;
    } catch (error) {}
  },
);

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//   async id => {
//     try {
//       const { data } = await axios.delete(`/contacts/${id}`);
//       return data;
//     } catch (error) {}
//   },
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async credentials => {
//     try {
//       const { data } = await axios.post(`/contacts`, credentials);
//       return data;
//     } catch (error) {}
//   },
// );
