import { createSlice } from '@reduxjs/toolkit';
import { getUsersAdvice } from './users-operation';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  extraReducers: {
    [getUsersAdvice.fulfilled](state, action) {
      // console.log(action.meta.arg);
      // state = [...action.meta.arg];
      return (state = [...state, action.meta.arg]);
    },
  },
});

// export const { addItems, deleteItems } = usersReducer.actions;
export const { getAdvice } = usersSlice.actions;
