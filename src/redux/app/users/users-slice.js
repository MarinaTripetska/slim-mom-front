import { createSlice } from '@reduxjs/toolkit';
import { getUsersAdvice } from './users-operation';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    advice: {
      recommendKkal: '',
      recommendProd: [],
    },
  },
  extraReducers: {
    [getUsersAdvice.pending](state, _) {
      state.advice.recommendKkal = '';
      state.advice.recommendProd = [];
    },
    [getUsersAdvice.fulfilled](state, { payload }) {
      state.advice.recommendKkal =
        payload.data.nutritionAdvice.userDailyCalorieIntake;
      state.advice.recommendProd = [
        ...payload.data.nutritionAdvice.userNotRecommendedProducts,
      ];
    },
    [getUsersAdvice.rejected](state, _) {
      state.advice.recommendKkal = '';
      state.advice.recommendProd = [];
    },
  },
});

// export const { addItems, deleteItems } = usersReducer.actions;
export const { getAdvice } = usersSlice.actions;
