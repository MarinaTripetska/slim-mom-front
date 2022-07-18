import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    userInfo: null,
    userDailyCalorieIntake: null,
    userNotRecommendedProducts: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: {
    // register

    [authOperations.actionRegister.pending](state) {
      state.isLoading = true;
    },
    [authOperations.actionRegister.fulfilled](state, _) {
      state.isSuccess = true;
      state.isLoading = false;
    },
    [authOperations.actionRegister.rejected](state, _) {
      state.isLoading = false;
      state.isError = true;
    },

    // login

    [authOperations.actionLogin.pending](state) {
      state.isLoading = true;
    },
    [authOperations.actionLogin.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.actionLogin.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
    },

    // current user

    [authOperations.actionCurrent.pending](state) {
      state.isLoading = true;
      state.isFetchingUser = true;
    },
    [authOperations.actionCurrent.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetchingUser = false;
      state.isLoggedIn = true;
    },
    [authOperations.actionCurrent.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isFetchingUser = false;
    },

    // logout

    [authOperations.actionLogout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    // getUserAdvice

    [authOperations.getUsersAdvice.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.getUsersAdvice.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = {
        userDailyCalorieIntake: payload.userDailyCalorieIntake,
        userNotRecommendedProducts: [...payload.userNotRecommendedProducts],
      };
    },
    [authOperations.getUsersAdvice.rejected](state, _) {
      state.isLoading = false;
    },
  },
});

export const { login, logout, reset, advice } = authSlice.actions;
