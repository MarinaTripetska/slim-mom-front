import { createSlice } from '@reduxjs/toolkit';
import { getUsersAdvice } from './users-operation';

const initialState = {
  advice: {
    recommendKkal: '',
    recommendProd: [],
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUsersAdvice.pending](state, _) {
      //loading
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
