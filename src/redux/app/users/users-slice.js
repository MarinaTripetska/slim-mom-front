import { createSlice } from '@reduxjs/toolkit';
import { getUsersAdvice } from './users-operation';

export const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  extraReducers: {
    [getUsersAdvice.fulfilled](state, action) {
      return (state = action.meta.arg);
    },
  },
});

// export const { addItems, deleteItems } = usersReducer.actions;
export const { getAdvice } = usersSlice.actions;
